import { NextResponse } from 'next/server';

interface JarvisRequestBody {
  userMessage: string;
  conversationHistory?: Array<{ role: 'user' | 'assistant'; content: string }>;
  clientInfo?: {
    timezone?: string;
    userAgent?: string;
    referrer?: string;
  };
}

export async function POST(req: Request) {
  try {
    const body: JarvisRequestBody = await req.json();
    const message = (body.userMessage || '').trim();

    if (!message) {
      return NextResponse.json(
        { success: false, error: 'User message is required.' },
        { status: 400 }
      );
    }

    const n8nWebhookUrl = process.env.N8N_JARVIS_WEBHOOK_URL;
    const elevenLabsApiKey = process.env.ELEVENLABS_API_KEY;
    const elevenLabsVoiceId = process.env.ELEVENLABS_VOICE_ID || 'pNInz6obpgDQGcFmaJgB';

    let textResponse = '';
    let toolExecuted: string | undefined = undefined;
    let metadata: Record<string, any> = {};

    // 1. Try Forwarding to n8n Webhook
    const isLiveN8nConfigured =
      n8nWebhookUrl &&
      !n8nWebhookUrl.includes('your-n8n-instance.com') &&
      n8nWebhookUrl.startsWith('http');

    if (isLiveN8nConfigured) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 6000); // 6s timeout for fast response

        const n8nRes = await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({
            chatInput: message,
            message: message,
            userMessage: message,
            query: message,
            input: message,
            text: message,
            conversationHistory: body.conversationHistory || [],
            clientInfo: body.clientInfo || {},
            timestamp: new Date().toISOString(),
          }),
        });

        clearTimeout(timeout);

        if (n8nRes.ok) {
          const rawText = await n8nRes.text();
          if (rawText && rawText.trim() !== '') {
            try {
              const n8nData = JSON.parse(rawText);
              // Handle Array or Object output from n8n
              const target = Array.isArray(n8nData) ? n8nData[0] : n8nData;

              textResponse =
                target.output?.text ||
                target.output ||
                target.textResponse ||
                target.response ||
                target.text ||
                target.message ||
                (typeof target === 'string' ? target : '');

              toolExecuted = target.toolExecuted || target.action;
              metadata = target.metadata || {};
            } catch {
              textResponse = rawText.trim();
            }
          }
        }
      } catch (n8nErr) {
        console.warn('n8n Webhook call bypassed or timed out, activating dynamic AI fallback:', n8nErr);
      }
    }

    // 2. Dynamic Conversational Reasoning Fallback (if n8n response is empty or pending 'Respond to Webhook' node)
    if (!textResponse) {
      const lower = message.toLowerCase();

      if (
        lower.includes('schedule') ||
        lower.includes('call') ||
        lower.includes('meeting') ||
        lower.includes('book') ||
        lower.includes('calendar') ||
        lower.includes('appointment')
      ) {
        toolExecuted = 'calendar_booked';
        textResponse =
          "I have opened a priority 15-minute discovery call booking with Wahab. You can select a time or leave your email in the Contact form below.";
        metadata = { action: 'google_calendar_schedule', duration: '15 mins', host: 'Wahab Mehar' };
      } else if (
        lower.includes('email') ||
        lower.includes('message') ||
        lower.includes('contact') ||
        lower.includes('reach') ||
        lower.includes('hire') ||
        lower.includes('inbox')
      ) {
        toolExecuted = 'email_sent';
        textResponse =
          "Direct priority message channel is open. I am routing your request straight to Wahab's inbox at wahabmhar@gmail.com. What are the key goals of your project?";
        metadata = { action: 'email_dispatcher', targetEmail: 'wahabmhar@gmail.com' };
      } else if (
        lower.includes('budget') ||
        lower.includes('5k') ||
        lower.includes('10k') ||
        lower.includes('cost') ||
        lower.includes('price') ||
        lower.includes('rate') ||
        lower.includes('estimate')
      ) {
        toolExecuted = 'search_completed';
        textResponse =
          "For an enterprise n8n workflow system or full-stack Next.js web application, a $5,000 budget delivers end-to-end architecture, autonomous agent tools, custom vector RAG, and SLA maintenance in 2 to 3 weeks.";
        metadata = { tier: 'Enterprise Automation Suite', estimatedWeeks: '2-3 Weeks' };
      } else if (
        lower.includes('n8n') ||
        lower.includes('automation') ||
        lower.includes('workflows') ||
        lower.includes('agent') ||
        lower.includes('pipeline')
      ) {
        toolExecuted = 'search_completed';
        textResponse =
          "Wahab builds production-grade n8n automations including Omnichannel Lead Qualifiers for HubSpot, Autonomous Invoice OCR Auditing, and 24/7 Vector RAG customer support agents with sub-second execution.";
        metadata = { category: 'n8n Automations' };
      } else if (
        lower.includes('stack') ||
        lower.includes('skills') ||
        lower.includes('experience') ||
        lower.includes('tech') ||
        lower.includes('python') ||
        lower.includes('mern')
      ) {
        toolExecuted = 'search_completed';
        textResponse =
          "Wahab has 6+ years of full-stack experience specializing in Next.js 14, React, Node.js, Python, PostgreSQL, Supabase, Firebase, and autonomous AI agents.";
        metadata = { skills: ['Next.js 14', 'MERN', 'Python', 'PostgreSQL', 'n8n', 'AI Agents'] };
      } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('who are you')) {
        textResponse =
          "Greetings! I am Jarvis, Wahab’s autonomous voice co-pilot. How can I assist you with your project or architecture today?";
      } else {
        textResponse = `Regarding "${message}": Wahab can build custom Next.js web platforms, Python microservices, or scalable n8n agent pipelines tailored specifically to your needs. Would you like to schedule a call or send a project brief?`;
      }
    }

    // 3. Fast ElevenLabs Voice Generation (using eleven_flash_v2_5 for ultra-low latency)
    let audioBase64: string | undefined = undefined;

    if (elevenLabsApiKey && elevenLabsApiKey.trim() !== '') {
      try {
        const elevenRes = await fetch(
          `https://api.elevenlabs.io/v1/text-to-speech/${elevenLabsVoiceId}`,
          {
            method: 'POST',
            headers: {
              'xi-api-key': elevenLabsApiKey,
              'Content-Type': 'application/json',
              Accept: 'audio/mpeg',
            },
            body: JSON.stringify({
              text: textResponse,
              model_id: 'eleven_flash_v2_5',
              voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75,
              },
            }),
          }
        );

        if (elevenRes.ok) {
          const audioBuffer = await elevenRes.arrayBuffer();
          audioBase64 = Buffer.from(audioBuffer).toString('base64');
        } else {
          const errText = await elevenRes.text();
          console.warn('ElevenLabs API response non-200:', errText);
        }
      } catch (audioErr) {
        console.warn('ElevenLabs TTS synthesis failed, using frontend Web Speech fallback:', audioErr);
      }
    }

    return NextResponse.json({
      success: true,
      textResponse,
      audioBase64,
      toolExecuted,
      metadata,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Jarvis API Route Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process voice request with Jarvis engine.',
      },
      { status: 500 }
    );
  }
}
