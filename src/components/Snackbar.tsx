'use client';

import { useSnackbar } from '@/contexts/SnackbarContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

export default function Snackbar() {
  const { snackbar, hideSnackbar } = useSnackbar();

  if (!snackbar) return null;

  return (
    <div className="fixed top-4 right-4 left-4 sm:left-auto z-50">
      <div
        className={`rounded-lg p-4 flex items-center justify-between gap-2 shadow-lg ${
          snackbar.type === 'success'
            ? 'bg-[#F1FDF7] text-black'
            : 'bg-[#FFF1F0] text-black'
        }`}
      >
        <div className="flex items-center gap-3">
          {snackbar.type === 'success' ? (
            <CheckCircleIcon className="w-5 h-5 text-[#00A651]" />
          ) : (
            <XCircleIcon className="w-5 h-5 text-red-500" />
          )}
          <p className="text-sm font-medium">{snackbar.message}</p>
        </div>
        <button
          onClick={hideSnackbar}
          className="text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
} 