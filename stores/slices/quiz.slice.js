import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { QuizService } from '@/lib/QuizService'

export const generateQuiz = createAsyncThunk(
  'quiz/generateQuiz',
  async (topics) => {
    const quiz = await QuizService.generate(topics)
    return quiz
  }
)

const initialState = {
  quizes: [],
  loading: false,
  error: null,
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizes: (_state, _action) => {
      _state.quizes = _action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateQuiz.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(generateQuiz.fulfilled, (state, action) => {
        state.loading = false
        state.quizes = action.payload
      })
      .addCase(generateQuiz.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { setQuizes } = quizSlice.actions
export default quizSlice.reducer
