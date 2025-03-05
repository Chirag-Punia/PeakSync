import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useThemeStore = create(
  persist(
    (set) => ({
      isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    { name: 'theme-store' }
  )
)