"use client";

import { useRef, useState } from "react";
import { RadioGrp, RadioItm } from "@/components/custom/radio";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { QuizService } from "@/lib/QuizService";
import QuizLoader from "@/components/custom/QuizLoader";

export default function Home() {
  const QuestionTime = 8; // for quick checks

  const [quiz, setQuiz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeleft, setTimeleft] = useState(QuestionTime);
  const [maxIndexReached, setMaxIndexReached] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const timerRef = useRef(null);

  const topic = "Computer Science";
  const devMode = true;

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
  const selectedAnswer = currentQuestion
    ? answers[currentQuestion.id]
    : null;

  const isLocked = currentIndex < maxIndexReached;

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        setLoading(true);
        const data = devMode ? devQuiz : await QuizService.generate(topic);
        setQuiz(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    loadQuiz();
  }, []);

  // ================= TIMER =================
  useEffect(() => {
    if (!currentQuestion || submitted) return;

    setTimeleft(QuestionTime);

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeleft((prev) => {
        if (prev === 1) {
          clearInterval(timerRef.current);
          handleAutoSkip();
          return QuestionTime;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentQuestion?.id, submitted]);

  // ================= ACTIONS =================
  const handleAutoSkip = () => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: prev[currentQuestion.id] || "skipped",
    }));

    setMaxIndexReached((prev) => Math.max(prev, currentIndex + 1));

    if (currentIndex < quiz.length - 1) {
      setCurrentIndex((prev) => prev + 1);
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

    quiz.forEach((q) => {
      const correctAnswer = q.options.find((o) => o.isCorrect)?.answer;
      if (answers[q.id] === correctAnswer) correct++;
    });

    setScore(correct);
    setSubmitted(true);
    clearInterval(timerRef.current);
  };

  if (loading) return <QuizLoader />;

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-3 sm:px-6">
      <div className="w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 p-4 sm:p-6 flex flex-col gap-4 rounded-xl border-2 shadow-lg bg-background">
        <h1 className="font-google text-base sm:text-lg">
          Custom Radio UI Quiz
        </h1>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center p-2 rounded-md">
            <h2 className="font-semibold text-sm sm:text-base">
              {currentQuestion?.question}
            </h2>
            {!isLocked && !submitted && (
              <div className="font-bold bg-muted p-1 rounded-md">
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

          {/* OPTIONS */}
          {currentQuestion && (
            <RadioGrp
              key={currentQuestion.id}
              value={selectedAnswer || ""}
              onValueChange={(value) => {
                if (submitted || isLocked) return;
                setAnswers((prev) => ({
                  ...prev,
                  [currentQuestion.id]: value,
                }));
              }}
              className="w-full space-y-3"
            >
              {currentQuestion.options.map((option, idx) => (
                <RadioItm
                  key={idx}
                  value={option.answer}
                  disabled={isLocked}
                >
                  {option.answer}
                </RadioItm>
              ))}
            </RadioGrp>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2 mt-4">
          <Button onClick={handlePrev} disabled={currentIndex === 0}>
            Previous
          </Button>

          {currentIndex === quiz.length - 1 ? (
            <Button
              onClick={handleSubmit}
              disabled={submitted || !selectedAnswer}
            >
              Submit
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={submitted || !selectedAnswer}
            >
              Next
            </Button>
          )}
        </div>

        {/* RESULT */}
        {submitted && (
          <div className="mt-4 p-4 border rounded-md bg-muted">
            <h3 className="font-semibold">
              Result: {score} / {quiz.length}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
