import { create, persist } from '@bentoo/state-man'

export const useTheme = create(
  persist({
    name: '@pinpoint/theme',
    data: 'system'
  })
)
