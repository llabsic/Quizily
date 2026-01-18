"use client";

import { useState } from "react";
import { RadioGrp, RadioItm } from "@/components/custom/radio";
import { Button } from "@/components/ui/button";

function Home() {
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

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
    {
      id: "q-4",
      question: "Why's there a bug in the code?",
      options: [
        { answer: "Never paid attention", isCorrect: false },
        { answer: "Didn't know about it", isCorrect: true },
        { answer: "It doesn't matter", isCorrect: false },
      ],
    },
    {
      id: "q-5",
      question: "Were u able to find the bug?",
      options: [
        { answer: "No submit btn", isCorrect: false },
        {
          answer: "First mcq can't be marked because of material UI",
          isCorrect: true,
        },
        { answer: "Data could have been efficient", isCorrect: false },
      ],
    },
  ];

  const currentQuestion = quiz[currentIndex];
  const selectedAnswer = answers[currentQuestion.id];

  const handleNext = () => {
    if (currentIndex < quiz.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    let correct = 0;

    quiz.forEach((q) => {
      const selected = answers[q.id];
      const correctAnswer = q.options.find((o) => o.isCorrect)?.answer;

      if (selected === correctAnswer) {
        correct++;
      }
    });

    setScore(correct);
    setSubmitted(true);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">

      <div className="overflow-hidden border border-stone-800 shadow-lg w-4/5 rounded-md">
    <div className="p-3 flex flex-col gap-4 ">
      <h1 className="font-google text-lg font-bold">Custom Radio UI Quiz</h1>
      <div className="flex justify-between">
        <h2 className="font-semibold">{currentQuestion.question}</h2>
      <div>time and score</div>
      </div>
      <div className="flex flex-col items-center w-full rounded-md gap-3">
      <div className="w-[80%] p-1 flex items-center">

        <RadioGrp
          value={selectedAnswer ?? ""}
          onValueChange={(value) =>
            setAnswers((prev) => ({
              ...prev,
              [currentQuestion.id]: value,
            }))
          }
          >
          {currentQuestion.options.map((option, idx) => (
            <RadioItm
            key={`${currentQuestion.id}-${idx}`}
            value={option.answer}
            
            >
              {option.answer}
            </RadioItm>
          ))}
        </RadioGrp>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <Button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          >
          Previous
        </Button>

        {currentIndex === quiz.length - 1 ? (
          <Button
          onClick={handleSubmit}
          disabled={!selectedAnswer || submitted}
          >
            Submit
          </Button>
        ) : (
          <Button
          onClick={handleNext}
          disabled={!selectedAnswer}
          >
            Next
          </Button>
        )}
      </div>

      {submitted && (
        <div className="mt-4 p-4 border border-stone-950 rounded-md bg-muted">
          <h3 className="font-semibold">
            Result: {score} / {quiz.length}
          </h3>
          <p className="text-sm text-muted-foreground">
            You answered {score} questions correctly.
          </p>
        </div>
      )}
    </div>

</div>    
</div>
  );
}

export default Home;
