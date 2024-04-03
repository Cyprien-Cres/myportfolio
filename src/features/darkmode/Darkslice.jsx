import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mode: false,
}

export const DarkSlice = createSlice({
  name: 'dark',
  initialState,
  reducers : {
    setDarkMode: (state, action) => {
      state.mode = action.payload
    }
  },
})

export const { setDarkMode } = DarkSlice.actions

export default DarkSlice.reducer

export const currentMode = state => state.dark.mode