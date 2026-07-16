import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slices/quiz.slice";

export const quizStore = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
