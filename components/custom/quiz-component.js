"use client";

import {useRef, useState, useEffect} from "react";
import {RadioGroup, Radio, Button, Label, Chip, Description, Surface} from "@heroui/react";
import QuizLoader from "@/components/custom/quiz-loader";
import {ArrowLeft, ArrowRight, Send, AlarmClock} from "@mynaui/icons-react";

export default function QuizBlock({questions, QuestionTime = 16}) {
    const [quiz, setQuiz] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [totalAnswer, setTotalAnswer] = useState([]);
    const [timeleft, setTimeleft] = useState(QuestionTime);
    const [maxIndexReached, setMaxIndexReached] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasNavigatedForward, setHasNavigatedForward] = useState(false);

    const timerRef = useRef(null);

    const devQuiz = [
        {
            id: "q-1",
            question: "what is correct spelling of Quddus?",
            options: [
                {answer: "quddis", isCorrect: false},
                {answer: "qudoos", isCorrect: false},
                {answer: "qidis", isCorrect: false},
                {answer: "quddus", isCorrect: true},
            ],
        },
        {
            id: "q-2",
            question: "what is correct spelling of Quddus?",
            options: [
                {answer: "quddis", isCorrect: false},
                {answer: "qudoos", isCorrect: false},
                {answer: "qidis", isCorrect: false},
                {answer: "quddus", isCorrect: true},
            ],
        },
        {
            id: "q-3",
            question: "what is correct spelling of Quddus?",
            options: [
                {answer: "quddis", isCorrect: false},
                {answer: "qudoos", isCorrect: false},
                {answer: "qidis", isCorrect: false},
                {answer: "quddus", isCorrect: true},
            ],
        },
        {
            id: "q-4",
            question: "what is wrong spelling of Quddus?",
            options: [
                {answer: "quddis", isCorrect: false},
                {answer: "qudoos", isCorrect: false},
                {answer: "qidis", isCorrect: false},
                {answer: "quddus", isCorrect: true},
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
                if (Array.isArray(questions) && questions.length > 0) {
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
    }, [questions]);

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
    }, [currentQuestion, submitted, QuestionTime]);

    const buildAnswerStructure = (questionData, selectedAnswer, isSkipped = false) => {
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

    const updateTotalAnswer = (questionData, selectedAnswer, isSkipped = false) => {
        setTotalAnswer((prev) => {
            const existingIndex = prev.findIndex((a) => a.id === questionData.id);
            const answerStructure = buildAnswerStructure(
                questionData,
                selectedAnswer,
                isSkipped
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
            setHasNavigatedForward(true);
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

            const existingAnswer = totalAnswer.find((a) => a.id === q.id);
            if (existingAnswer) {
                if (userAnswer === correctAnswer) correct++;
                return existingAnswer;
            }

            const isSkipped = userAnswer === "skipped" || !userAnswer;
            if (!isSkipped && userAnswer === correctAnswer) correct++;
            return buildAnswerStructure(
                q,
                isSkipped ? null : userAnswer,
                isSkipped
            );
        });

        setTotalAnswer(finalAnswers);
        setScore(correct);
        setSubmitted(true);
        if (timerRef.current) clearInterval(timerRef.current);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    const getTimerColor = (seconds) => {
        if (seconds <= 30) return "danger";
        if (seconds <= 120) return "warning";
        return "accent";
    };

    if (loading) return <QuizLoader/>;

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <Chip variant={submitted ? "secondary" : "primary"}
                      color={submitted ? "secondary" : getTimerColor(timeleft)} size={"lg"}><AlarmClock
                    className={"size-5"}/> {formatTime(timeleft)}</Chip>
            </div>

            <div className="flex flex-col">
                {currentQuestion && (
                    <>
                        <div className={"flex justify-between items-center"}>
                            <div className={"flex flex-col"}>
                                <Label className="text-base font-medium">{currentQuestion.question}</Label>
                                <Description>This Quiz about the spelling of someone name</Description>
                            </div>
                            <Chip variant={"primary"} color={"accent"} size={"lg"}
                                  className={"font-plus-jakarta font-bold"}>{currentIndex + 1}/{quiz.length}</Chip>
                        </div>
                        {submitted && (
                            <Surface className="flex min-w-[320px] items-center justify-between rounded-3xl p-4 my-2"
                                     variant="default">
                                <div className="flex flex-col">

                                    <h3 className="text-base font-semibold text-foreground">Result</h3>
                                    <p className="text-sm text-muted">
                                        You correct {score} out of {quiz.length}.
                                    </p>
                                </div>
                                <div className={"flex items-center justify-center gap-2"}>
                                    <Button size={"lg"} variant={"secondary"}>Retry</Button>
                                    <Button size={"lg"}>Insights<ArrowRight/></Button>
                                </div>
                            </Surface>
                        )}
                        <RadioGroup
                            key={currentQuestion.id}
                            value={selectedAnswer || ""}
                            onChange={(value) => {
                                if (submitted || isLocked) return;
                                setAnswers((prev) => ({
                                    ...prev,
                                    [currentQuestion.id]: value,
                                }));
                                updateTotalAnswer(currentQuestion, value, false);
                            }}
                            className={"grid grid-cols-2 gap-x-4"}
                        >
                            {currentQuestion.options.map((option, idx) => (
                                <Radio key={idx} value={option.answer} isDisabled={isLocked} className={"min-w-sm"}>
                                    <Radio.Content
                                        className={"bg-surface-tertiary p-6 w-full rounded-xl ring-0 ring-accent transition hover:ring-2" +
                                            "data-[selected=true]:ring-accent data-[selected=true]:ring-2"}>
                                        <Radio.Control className={"size-6"}>
                                            <Radio.Indicator/>
                                        </Radio.Control>
                                        {option.answer}
                                    </Radio.Content>
                                </Radio>
                            ))}
                        </RadioGroup>
                    </>
                )}
            </div>

            <div className="flex gap-2 mt-4">
                {currentIndex > 0 && (
                    <Button variant={"secondary"} onClick={handlePrev} disabled={!submitted && hasNavigatedForward}>
                        <ArrowLeft/>
                        Previous
                    </Button>
                )}

                {!submitted && currentIndex === quiz.length - 1 ? (
                    <Button onClick={handleSubmit}>Submit <Send/></Button>
                ) : (!submitted || currentIndex < quiz.length - 1) && (
                    <Button onClick={handleNext}>
                        Next
                        <ArrowRight/>
                    </Button>
                )}
            </div>


        </div>
    );
}