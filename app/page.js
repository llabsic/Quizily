"use client";

import { useState } from "react";
import { RadioGrp, RadioItm } from "@/components/custom/radio";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { QuizService } from "@/lib/QuizService";
import QuizLoader from "@/components/custom/QuizLoader";
import Result from "@/components/custom/custom_components/Result";

export default function Home() {
  const QuestionTime = 30; // seconds per question

  const [answers, setAnswers] = useState({});
  const [quiz, setQuiz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeleft, setTimeleft] = useState(QuestionTime);
  const [loading,setloading]=useState(false);
  const topic="Computer Science";

  useEffect(() => {
    handleQuizData(topic);
  }, []);

  const devMode = true; // boolean

  const devQuiz = [
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
      question: "what is correct spelling of Quddus?",
      options: [
        { answer: "quddis", isCorrect: false },
        { answer: "qudoos", isCorrect: false },
        { answer: "qidis", isCorrect: false },
        { answer: "quddus", isCorrect: true },
      ],
    },
  ];

  const currentQuestion = quiz[currentIndex];
  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : null;

  const isLocked = currentIndex < maxIndexReached;

  useEffect(() => {
    setTimeleft(QuestionTime);

    const interval = setInterval(() => {
      setTimeleft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleNext();
          return QuestionTime;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, isLocked, submitted]);

  const handleQuizData = async (topic) => {
    try {
      setloading(true);
      const newQuiz = devMode ? devQuiz : await QuizService.generate(topic);
      setQuiz(newQuiz);
    } catch (err) {
      console.error("Error fetching quiz:", err);
    } finally {
      setloading(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < quiz.length - 1) {
      setMaxIndexReached((prev) => Math.max(prev, currentIndex + 1));
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
    setMaxIndexReached((prev) => prev + 1);

    quiz.forEach((q) => {
      const selected = answers[q.id];
      const correctAnswer = q.options.find((o) => o.isCorrect)?.answer;

      if (selected === correctAnswer) {
        correct++;
      }
    });

    setTimeleft(0);
    setScore(correct);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-3 sm:px-6">
      <div className="w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 p-4 sm:p-6 flex flex-col gap-4 rounded-xl sm:rounded-2xl border-2 shadow-lg bg-background">
        <h1 className="font-google text-base sm:text-lg text-center sm:text-left">
          Custom Radio UI Quiz
        </h1>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-2 rounded-md">
            <h2 className="font-semibold text-sm sm:text-base">
              {currentQuestion?.question}
            </h2>
            {!isLocked && !submitted && (
              <div className="font-bold text-sm sm:text-base bg-muted p-1 rounded-md">
                <span
                  className={`ml-1 ${
                    timeleft <= 5 ? "text-red-500" : timeleft <= 15 ? "text-orange-500" : "text-green-500"
                  }`}
                >
                  {timeleft + "s "}
                </span>
                left
              </div>
            )}
          </div>

          {/* Options */}
          <div className="flex w-full">
            {quiz.length > 0 ? (
              <RadioGrp
                key={currentQuestion.id}
                value={selectedAnswer ?? ""}
                onValueChange={(value) => {
                  if (isLocked || submitted) return;

                  setAnswers((prev) => ({
                    ...prev,
                    [currentQuestion.id]: value,
                  }));
                }}
                className="w-full space-y-3"
              >
                {currentQuestion.options.map((option, idx) => (
                  <RadioItm
                    key={`${currentQuestion.id}-${idx}`}
                    value={option.answer}
                    disabled={currentIndex < maxIndexReached}
                    className="text-sm sm:text-base"
                  >
                    {option.answer}
                  </RadioItm>
                ))}
              </RadioGrp>
            ) : (
              <QuizLoader />
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <Button
            className="w-full sm:w-auto"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            Previous
          </Button>

          {currentIndex === quiz.length - 1 ? (
            <Button
              className="w-full sm:w-auto"
              onClick={handleSubmit}
              disabled={!selectedAnswer || submitted}
            >
              Submit
            </Button>
          ) : (
            <Button
              className="w-full sm:w-auto"
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              Next
            </Button>
          )}
        </div>

        {/* Result */}
        {submitted && (
          <div className="mt-4 p-4 border rounded-md bg-muted text-sm sm:text-base">
            <h3 className="font-semibold">
              Result: {score} / {quiz.length}
            </h3>
            <p className="text-muted-foreground">
              You answered {score} questions correctly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
