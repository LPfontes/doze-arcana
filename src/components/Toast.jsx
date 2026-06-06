import React, { useEffect } from 'react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;

    // Auto-close after 3.5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3500);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-magic-900 text-white text-xs md:text-sm py-3 px-5 rounded-xl shadow-2xl border border-indigo-500/20 flex items-center gap-3 transition-all duration-300 z-50 max-w-sm transform animate-fade-in-up font-sans">
      <div className="p-1 bg-indigo-500/20 rounded-md text-indigo-300 shrink-0">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <span className="font-sans font-medium text-indigo-50 leading-relaxed">{message}</span>
    </div>
  );
}
