'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export type JarvisVoiceStatus = 'idle' | 'listening' | 'processing' | 'speaking' | 'error';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  toolExecuted?: string;
}

export function useJarvisVoice() {
  const [status, setStatus] = useState<JarvisVoiceStatus>('idle');
  const [transcript, setTranscript] = useState<string>('Tap the mic or choose a quick prompt to talk with Jarvis.');
  const [jarvisResponse, setJarvisResponse] = useState<string>(
    'Hello! I am Jarvis, Wahab’s autonomous AI Co-Pilot. Ask me about n8n automations, project estimates, or schedule a discovery session.'
  );
  const [audioVolume, setAudioVolume] = useState<number>(0);
  const [toolExecuted, setToolExecuted] = useState<string | null>(null);
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Audio Context & Analyser refs for real-time waveform sync
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioSourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const animFrameRef = useRef<number>(0);
  const recognitionRef = useRef<any>(null);

  // Initialize Web Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
          setStatus('listening');
          setErrorMessage(null);
        };

        recognition.onresult = (event: any) => {
          const userSpeech = event.results[0][0].transcript;
          if (userSpeech) {
            sendTextMessage(userSpeech);
          }
        };

        recognition.onerror = (event: any) => {
          console.warn('Speech recognition status:', event.error);
          if (event.error !== 'no-speech') {
            setErrorMessage(`Microphone error: ${event.error}`);
          }
          setStatus('idle');
        };

        recognition.onend = () => {
          if (status === 'listening') {
            setStatus('processing');
          }
        };

        recognitionRef.current = recognition;
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Web Audio frequency analyser loop
  const startVolumeAnalysis = useCallback(() => {
    if (!analyserRef.current) return;
    const analyser = analyserRef.current;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function analyze() {
      analyser.getByteFrequencyData(dataArray);
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) {
        sum += dataArray[i];
      }
      const avg = sum / dataArray.length;
      const normalized = Math.min(100, Math.round((avg / 128) * 100));
      setAudioVolume(normalized);

      animFrameRef.current = requestAnimationFrame(analyze);
    }

    animFrameRef.current = requestAnimationFrame(analyze);
  }, []);

  // Simulated fallback volume generator for speech synthesis
  const startSimulatedVolume = useCallback(() => {
    let interval: NodeJS.Timeout;
    interval = setInterval(() => {
      const vol = Math.floor(Math.random() * 65) + 20;
      setAudioVolume(vol);
    }, 90);

    return () => {
      clearInterval(interval);
      setAudioVolume(0);
    };
  }, []);

  // Play audio response (ElevenLabs Base64 or Web Speech Synthesis fallback)
  const playSpeechResponse = useCallback(
    async (text: string, audioBase64?: string) => {
      if (isMuted) {
        setStatus('idle');
        setAudioVolume(0);
        return;
      }

      // 1. Play ElevenLabs Base64 Audio if available
      if (audioBase64) {
        try {
          if (!audioContextRef.current) {
            const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
            audioContextRef.current = new AudioCtx();
          }

          if (audioContextRef.current.state === 'suspended') {
            await audioContextRef.current.resume();
          }

          if (!analyserRef.current) {
            analyserRef.current = audioContextRef.current.createAnalyser();
            analyserRef.current.fftSize = 64;
          }

          if (!audioElementRef.current) {
            audioElementRef.current = new Audio();
            audioSourceRef.current = audioContextRef.current.createMediaElementSource(
              audioElementRef.current
            );
            audioSourceRef.current.connect(analyserRef.current);
            analyserRef.current.connect(audioContextRef.current.destination);
          }

          const audio = audioElementRef.current;
          audio.src = `data:audio/mp3;base64,${audioBase64}`;

          audio.onplay = () => {
            setStatus('speaking');
            startVolumeAnalysis();
          };

          audio.onended = () => {
            setStatus('idle');
            setAudioVolume(0);
            cancelAnimationFrame(animFrameRef.current);
          };

          audio.onerror = () => {
            // Fallback to browser speech synthesis if audio playback fails
            playBrowserSpeech(text);
          };

          await audio.play();
          return;
        } catch (audioErr) {
          console.warn('AudioContext playback error, falling back to Web Speech:', audioErr);
        }
      }

      // 2. Browser Web Speech Synthesis Fallback
      playBrowserSpeech(text);
    },
    [isMuted, startVolumeAnalysis]
  );

  function playBrowserSpeech(text: string) {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setStatus('idle');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice =
      voices.find(
        (v) =>
          v.name.includes('Google') ||
          v.name.includes('Natural') ||
          v.name.includes('Samantha') ||
          v.name.includes('Daniel')
      ) ||
      voices.find((v) => v.lang.startsWith('en')) ||
      null;

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    let stopSimVolume: (() => void) | null = null;

    utterance.onstart = () => {
      setStatus('speaking');
      stopSimVolume = startSimulatedVolume();
    };

    utterance.onend = () => {
      setStatus('idle');
      setAudioVolume(0);
      if (stopSimVolume) stopSimVolume();
    };

    utterance.onerror = () => {
      setStatus('idle');
      setAudioVolume(0);
      if (stopSimVolume) stopSimVolume();
    };

    window.speechSynthesis.speak(utterance);
  }

  // Send message to Next.js API /api/jarvis -> n8n Webhook
  const sendTextMessage = useCallback(
    async (userMessage: string) => {
      if (!userMessage.trim()) return;

      setTranscript(userMessage);
      setStatus('processing');
      setToolExecuted(null);

      const updatedHistory: ChatMessage[] = [
        ...conversationHistory,
        { role: 'user', content: userMessage, timestamp: new Date().toISOString() },
      ];
      setConversationHistory(updatedHistory);

      try {
        const res = await fetch('/api/jarvis', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userMessage,
            conversationHistory: updatedHistory,
            clientInfo: {
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
            },
          }),
        });

        const data = await res.json();

        if (data.success) {
          const reply = data.textResponse || "I've processed your request.";
          setJarvisResponse(reply);
          setToolExecuted(data.toolExecuted || null);

          setConversationHistory((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: reply,
              timestamp: new Date().toISOString(),
              toolExecuted: data.toolExecuted,
            },
          ]);

          playSpeechResponse(reply, data.audioBase64);
        } else {
          throw new Error(data.error || 'API response failed');
        }
      } catch (err: any) {
        console.error('Jarvis Communication Error:', err);
        const fallback =
          "I am online and connected. Wahab is open for enterprise Next.js and n8n autonomous workflow deployments.";
        setJarvisResponse(fallback);
        playSpeechResponse(fallback);
      }
    },
    [conversationHistory, playSpeechResponse]
  );

  const startListening = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (audioElementRef.current) {
      audioElementRef.current.pause();
    }

    try {
      recognitionRef.current?.start();
    } catch {
      // Fallback simulation if browser speech recognition is already running or unsupported
      setStatus('listening');
      setTimeout(() => {
        sendTextMessage('What are Wahab’s latest n8n automation projects?');
      }, 2400);
    }
  }, [sendTextMessage]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setStatus('idle');
  }, []);

  const toggleMute = useCallback(() => {
    if (!isMuted) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (audioElementRef.current) {
        audioElementRef.current.pause();
      }
      setAudioVolume(0);
      setStatus('idle');
    }
    setIsMuted((prev) => !prev);
  }, [isMuted]);

  return {
    status,
    isListening: status === 'listening',
    isProcessing: status === 'processing',
    isSpeaking: status === 'speaking',
    transcript,
    jarvisResponse,
    audioVolume,
    toolExecuted,
    conversationHistory,
    isMuted,
    errorMessage,
    startListening,
    stopListening,
    toggleMute,
    sendTextMessage,
  };
}
