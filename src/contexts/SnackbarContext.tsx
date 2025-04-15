'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

type SnackbarType = 'success' | 'error';

interface SnackbarMessage {
  message: string;
  type: SnackbarType;
}

interface SnackbarContextType {
  showSnackbar: (message: string, type: SnackbarType) => void;
  hideSnackbar: () => void;
  snackbar: SnackbarMessage | null;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [snackbar, setSnackbar] = useState<SnackbarMessage | null>(null);

  const showSnackbar = useCallback((message: string, type: SnackbarType) => {
    setSnackbar({ message, type });
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setSnackbar(null);
    }, 5000);
  }, []);

  const hideSnackbar = useCallback(() => {
    setSnackbar(null);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar, hideSnackbar, snackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
} 