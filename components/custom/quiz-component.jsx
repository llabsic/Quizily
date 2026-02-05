"use client";

import { useRef, useState } from "react";
import { RadioGrp, RadioItm } from "@/components/custom/ui/radio";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import QuizLoader from "@/components/custom/QuizLoader";

export default function QuizBlock({ questions, QuestionTime = 3 }) {
  const [quiz, setQuiz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalAnswer, setTotalAnswer] = useState([]);
  const [timeleft, setTimeleft] = useState(QuestionTime);
  const [maxIndexReached, setMaxIndexReached] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const timerRef = useRef(null);

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
    {
      id: "q-3",
      question: "what is correct spelling of Quddus?",
      options: [
        { answer: "quddis", isCorrect: false },
        { answer: "qudoos", isCorrect: false },
        { answer: "qidis", isCorrect: false },
        { answer: "quddus", isCorrect: true },
      ],
    },
    
    {
      id: "q-4",
      question: "what is wrong spelling of Quddus?",
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
    const loadQuiz = async () => {
      try {
        setLoading(true);

        if (Array.isArray(questions) && questions !== undefined) {
          setQuiz(questions);
        } else {
          setQuiz(devQuiz);
        }
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    };

    loadQuiz();
  }, []);

  // Timing Logic
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
  }, [currentQuestion, submitted]);

  const buildAnswerStructure = (
    questionData,
    selectedAnswer,
    isSkipped = false,
  ) => {
    return {
      id: questionData.id,
      question: questionData.question,
      isSkipped: isSkipped,
      options: questionData.options.map((option) => ({
        answer: option.answer,
        isCorrect: option.isCorrect,
        userSelected: selectedAnswer === option.answer && !isSkipped,
      })),
    };
  };

  const updateTotalAnswer = (
    questionData,
    selectedAnswer,
    isSkipped = false,
  ) => {
    setTotalAnswer((prev) => {
      const existingIndex = prev.findIndex((a) => a.id === questionData.id);
      const answerStructure = buildAnswerStructure(
        questionData,
        selectedAnswer,
        isSkipped,
      );
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = answerStructure;
        return updated;
      }
      return [...prev, answerStructure];
    });
  };

  const handleAutoSkip = () => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: prev[currentQuestion.id] || "skipped",
    }));

    updateTotalAnswer(currentQuestion, null, true);

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

    const finalAnswers = quiz.map((q) => {
      const correctAnswer = q.options.find((o) => o.isCorrect)?.answer;
      const userAnswer = answers[q.id];

      if (userAnswer === correctAnswer) correct++;

      const existingAnswer = totalAnswer.find((a) => a.id === q.id);
      if (!existingAnswer) {
        const isSkipped = userAnswer === "skipped" || !userAnswer;
        return buildAnswerStructure(
          q,
          isSkipped ? null : userAnswer,
          isSkipped,
        );
      }
      console.info(totalAnswer);
      return existingAnswer;
    });

    setTotalAnswer(finalAnswers);
    setScore(correct);
    setSubmitted(true);
    clearInterval(timerRef.current);
  };

  if (loading) return <QuizLoader />;

  return (
    <>
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
                    timeleft <= 5
                      ? "text-red-500"
                      : timeleft <= 15
                        ? "text-orange-500"
                        : "text-green-500"
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
                updateTotalAnswer(currentQuestion, value, false);
              }}
              className="w-full space-y-3"
            >
              {currentQuestion.options.map((option, idx) => (
                <RadioItm key={idx} value={option.answer} disabled={isLocked}>
                  {option.answer}
                </RadioItm>
              ))}
            </RadioGrp>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2 mt-4">
          {submitted && (
            <Button onClick={handlePrev} disabled={currentIndex === 0}>
              Previous
            </Button>
          )}


          {!submitted && currentIndex === quiz.length - 1 ? (
              <Button onClick={handleSubmit}>Submit</Button>
          ) : <Button onClick={handleNext}>Next</Button>}
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
    </>
  );
}
