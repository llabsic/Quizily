import QuizBlock from "@/components/custom/quiz-component";

export default function Page() {

    return (
        <div className={"flex h-full w-full items-start pt-6 justify-start"}>
            <QuizBlock QuestionTime={10000}/>
        </div>
    )
}