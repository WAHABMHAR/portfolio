'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { FloatingInput } from '@/components/contact/FloatingInput';
import { Send, Loader2, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export function ContactStateMachine() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function triggerConfettiBurst() {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#bc62b4', '#00f0ff', '#28ca41', '#ffffff'],
      });
    } catch {
      // Fallback if canvas is not supported
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setFormState('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormState('success');
        triggerConfettiBurst();

        // Clear input fields
        setName('');
        setEmail('');
        setMessage('');

        // Reset back to idle after 5 seconds
        setTimeout(() => {
          setFormState('idle');
        }, 5000);
      } else {
        setFormState('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setFormState('error');
      setErrorMessage('Network error. Please try again or email directly.');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-3xl bg-[#0d0b14]/90 border border-white/10 shadow-2xl backdrop-blur-2xl flex flex-col gap-5"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent-primary" />
          Send a Direct Message
        </h3>
        <p className="text-xs sm:text-sm text-text-secondary">
          Leave your details below and your message will be dispatched directly to my personal inbox.
        </p>
      </div>

      {/* Name Input */}
      <FloatingInput
        id="contact-name"
        label="Your Name *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* Email Input */}
      <FloatingInput
        id="contact-email"
        label="Email Address *"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {/* Message Input */}
      <FloatingInput
        id="contact-message"
        label="Your Message *"
        isTextarea
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      {/* Error Message Toast */}
      {formState === 'error' && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-400">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* State Machine Submit Button */}
      <button
        type="submit"
        disabled={formState === 'sending' || !name.trim() || !email.trim() || !message.trim()}
        className={`w-full py-4 px-6 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl ${
          formState === 'success'
            ? 'bg-[#28ca41] text-black shadow-[#28ca41]/40'
            : formState === 'sending'
            ? 'bg-[#bc62b4]/60 text-white cursor-wait'
            : formState === 'error'
            ? 'bg-red-600 hover:bg-red-500 text-white'
            : 'bg-gradient-to-r from-[#bc62b4] via-[#a84aa0] to-[#8e3f88] text-white hover:shadow-[#bc62b4]/50 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
        }`}
      >
        {formState === 'idle' && (
          <>
            <span>Submit Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
        {formState === 'sending' && (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending to Inbox...</span>
          </>
        )}
        {formState === 'success' && (
          <>
            <CheckCircle2 className="w-4 h-4" />
            <span>Message Sent! I will reply in &lt; 24h</span>
          </>
        )}
        {formState === 'error' && (
          <>
            <AlertCircle className="w-4 h-4" />
            <span>Retry Submission</span>
          </>
        )}
      </button>
    </form>
  );
}
