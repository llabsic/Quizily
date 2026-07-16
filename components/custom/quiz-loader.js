import React from 'react'
import {Spinner} from "@heroui/react";

const QuizLoader = () => {
    return (
        <div className={"w-full h-full flex items-center justify-center"}>
            <Spinner color={"accent"} size={"lg"}/>
        </div>
    )
}

export default QuizLoader