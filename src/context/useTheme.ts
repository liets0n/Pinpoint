import { create } from 'zustand'

type State = {
  currentTheme: string
  changeCurrentTheme: (theme: string) => void
}

export const useTheme = create<State>()(set => ({
  currentTheme: 'light',
  changeCurrentTheme: theme => set({ currentTheme: theme })
}))
