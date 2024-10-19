import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  currentTheme: string
  changeCurrentTheme: (theme: string) => void
}

export const useTheme = create<State>()(
  persist(
    set => ({
      currentTheme: 'system',
      changeCurrentTheme: theme => set({ currentTheme: theme })
    }),
    { name: '@pinpoint/theme', version: 1 }
  )
)
