"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import QuizBlock from "@/components/custom/quiz-component";
import QuizLoader from "@/components/custom/quiz-loader";
import { generateQuiz } from "@/stores/slices/quiz.slice";

export default function Page() {
    const { quizes, loading, error } = useSelector((state) => state.quiz);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(generateQuiz({ topic: "basics html", totalMcqs: 5 }));
        }
    }, [id, dispatch]);

    if (loading) return <QuizLoader />;

    if (error) {
        return (
            <div className="flex w-full items-center justify-center p-8">
                <div className="rounded-lg border border-danger/20 bg-danger/10 p-4 text-center text-danger">
                    <p className="font-semibold">Failed to load quiz</p>
                    <p className="text-sm mt-1">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex w-full items-start justify-start pt-6">
            <QuizBlock questions={quizes} QuestionTime={500} />
        </div>
    );
}