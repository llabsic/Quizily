import { LLM } from "./llmService";

const MAX_QUIZ_FALLBACK = 10;

export async function generateQuiz(topic,totalMcqs){

    const mcqsCount = !totalMcqs || totalMcqs <= 0 ? MAX_QUIZ_FALLBACK : totalMcqs

    try{
        const quiz = await LLM({topic,totalMcqs:mcqsCount})
        return quiz
    }catch(err){
        return '{}'
    }
}