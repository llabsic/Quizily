export const QuizService = {
    generate:async (topic) =>{
        const response= await fetch('/api/quiz/generate',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"    
            },
            body:JSON.stringify({topic})
        });
        const data = await response.json();
        if (!response.ok || !data.success){
            throw new Error(data.error ||"Failed to generate quiz")}
        else{
            return data.quiz
        }
    }}