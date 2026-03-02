import React, { createContext, useContext, useState, useCallback } from 'react';
import type { RoleId } from '../data/roles';

type Theme = 'light' | 'dark';

interface AppState {
  role: RoleId;
  theme: Theme;
  setRole: (r: RoleId) => void;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<RoleId>('user');
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = useCallback(() => setTheme((t) => (t === 'light' ? 'dark' : 'light')), []);

  return (
    <AppContext.Provider value={{ role, theme, setRole, setTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppState must be used within AppProvider');
  return ctx;
}

export function useRole() {
  return useAppState().role;
}

export function useTheme() {
  return useAppState().theme;
}
