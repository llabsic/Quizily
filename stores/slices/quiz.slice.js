import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 } // or temporary

const counterSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    increment: ( _state ) => { _state.value += 1 },
    decrement: ( _state ) => { _state.value -= 1 },
    incrementByAmount: ( _state, _action) => {
      _state.value += _action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
