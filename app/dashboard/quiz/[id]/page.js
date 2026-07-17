"use client"
import QuizBlock from "@/components/custom/quiz-component";
import QuizLoader from "@/components/custom/quiz-loader";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "next/navigation";
import {generateQuiz} from "@/stores/slices/quiz.slice";

export default function Page() {
    const quizes = useSelector((state) => state.quiz.quizes);
    const loading = useSelector((state) => state.quiz.loading);
    const error = useSelector((state) => state.quiz.error);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const topic = "basics html";
            dispatch(generateQuiz({ topic, totalMcqs: 5 }));
        }
    }, [dispatch, id]);

    if (loading) return <QuizLoader />;
    if (error) return <div className="text-center py-8 text-danger">{error}</div>;

    return (
        <div className={"flex w-full items-start pt-6 justify-start"}>
            <QuizBlock questions={quizes} QuestionTime={500}/>
        </div>
    )
}
