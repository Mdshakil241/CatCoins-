import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 flex items-center justify-between gap-3 px-4 py-3 bg-[#161822] border border-[#F3BA2F]/40 text-neutral-100 rounded-xl shadow-2xl shadow-black/80 transition-all duration-200 animate-in fade-in slide-in-from-bottom-3"
    >
      <div className="flex items-center gap-2.5 min-w-0 flex-1">
        {type === 'success' ? (
          <CheckCircle2 className="w-5 h-5 text-[#F3BA2F] shrink-0" aria-hidden="true" />
        ) : (
          <Info className="w-5 h-5 text-[#F3BA2F] shrink-0" aria-hidden="true" />
        )}
        <span className="text-xs sm:text-sm font-medium leading-snug break-words">
          {message}
        </span>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-400 hover:text-white text-sm rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3BA2F] shrink-0"
        aria-label="Dismiss notification"
      >
        ✕
      </button>
    </div>
  );
};
