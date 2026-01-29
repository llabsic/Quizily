"use client";

import { quizStore } from "@/stores/quiz.store";
import { Provider } from "react-redux";

export function ReduxProvider({ children }) {
  return <Provider store={quizStore}>{children}</Provider>;
}
