import { create } from 'zustand';

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => {
    document.documentElement.classList.toggle('dark');
    return { darkMode: !state.darkMode };
  }),
}));