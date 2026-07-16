import { LLM } from "./llmService";

export async function generateQuiz(topic){
    try{
        const quiz = await LLM({topic})
        return quiz
    }catch(err){
        return '{}'
    }
}