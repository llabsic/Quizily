import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/quiz.slice";

export const quizStore = configureStore({
  reducer: {
    quizes: counterReducer,
  },
});
