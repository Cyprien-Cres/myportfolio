import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    en: false,
}

export const TradSlice = createSlice({
  name: 'trad',
  initialState,
  reducers : {
    setTradEn: (state, action) => {
      state.en = action.payload
    }
  },
})

export const { setTradEn } = TradSlice.actions

export default TradSlice.reducer

export const currentTrad = state => state.trad.en