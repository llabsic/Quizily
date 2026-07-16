import QuizBlock from "@/components/custom/quiz-component";

export default function Page() {

    return (
        <div className={"flex w-full items-start pt-6 justify-start"}>
            <QuizBlock QuestionTime={500}/>
        </div>
    )
}