"use client";

import { useState } from "react";
import { MaterialRadio } from "@/components/materialui/Radio";
import { MaterialButton } from "@/components/materialui/Button";

function Home() {
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const quiz = [
    {
      id: "q-1",
      question: "what is correct spelling of Quddus?",
      options: [
        { answer: "quddis", isCorrect: false },
        { answer: "qudoos", isCorrect: false },
        { answer: "qidis", isCorrect: false },
        { answer: "quddus", isCorrect: true },
      ],
    },
    {
      id: "q-2",
      question: "What is correct spelling of Abu bakar",
      options: [
        { answer: "abu Bakar", isCorrect: false },
        { answer: "Abu Bakar", isCorrect: true },
        { answer: "Abu bakar", isCorrect: false },
      ],
    },
    {
      id: "q-3",
      question: "What is correct spelling of Umair haha!!!",
      options: [
        { answer: "Uamair", isCorrect: false },
        { answer: "Umair Khan", isCorrect: true },
        { answer: "umair khan", isCorrect: false },
      ],
    },
    // add more questions here
  ];

  const currentQuestion = quiz[currentIndex];

  const handleNext = () => {
    if (currentIndex < quiz.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="p-3 flex flex-col gap-4">
      <h1>Material design UI</h1>

      <form key={currentQuestion.id} className="flex flex-col gap-2">
        <h2>{currentQuestion.question}</h2>
        {currentQuestion.options.map((option, idx) => (
          <MaterialRadio
            key={`${currentQuestion.id}-${idx}`}
            name={currentQuestion.id}
            value={option.answer}
            checked={answers[currentQuestion.id] === option.answer}
            onChange={(e) =>
              setAnswers({
                ...answers,
                [currentQuestion.id]: e.target.value,
              })
            }
            className="font-google"
          >
            {option.answer.toString()}
          </MaterialRadio>
        ))}
      </form>

      <div className="flex gap-2 mt-4">
        <MaterialButton
          variant="tonal"
          className="font-google"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Previous
        </MaterialButton>

        <MaterialButton
          variant="filled"
          className="font-google"
          onClick={handleNext}
          disabled={currentIndex === quiz.length - 1}
        >
          Next
        </MaterialButton>
      </div>
    </div>
  );
}

export default Home;
