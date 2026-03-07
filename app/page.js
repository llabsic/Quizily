"use client";

import QuizBlock from "@/components/custom/quiz-component";
import Dashboard from "@/components/custom/custom_components/Dashboard";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Dashboard />
      {/* <QuizBlock /> */}
    </div>
  );
}
