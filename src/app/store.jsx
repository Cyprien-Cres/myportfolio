import { configureStore } from '@reduxjs/toolkit'
import DarkSlice from '../features/darkmode/Darkslice'
import TradSlice from '../features/traduction/TradSlice'

export const store = configureStore({
  reducer: {
    dark: DarkSlice,
    trad: TradSlice,
  },
})