import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

function transformQuiz(rawQuiz) {
  return rawQuiz.map((q, idx) => ({
    id: `q-${idx + 1}`,
    question: q.question,
    options: q.options.map((opt) => ({
      answer: opt,
      isCorrect: opt === q.correctAnswer,
    })),
  }))
}

export const generateQuiz = createAsyncThunk(
  'quiz/generateQuiz',
  async ({ topic, totalMcqs = 10 }) => {
    const response = await fetch('/api/quiz/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, totalMcqs }),
    })

    const data = await response.json()

    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Failed to generate quiz')
    }

    return transformQuiz(data.quiz)
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
