import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROK_API_KEY });

const model = "meta-llama/llama-4-scout-17b-16e-instruct";


const quizSchema = {
    type: "json_schema",
    json_schema: {
        name: "fbise_quiz",
        strict: true, 
        schema: {
            type: "object",
            properties: {
                quiz: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            question: { type: "string" },
                            options: {
                                type: "array",
                                items: { type: "string" },
                                minItems: 4,
                                maxItems: 4
                            },
                            correctAnswer: { type: "string" },
                            explanation: { type: "string" }
                        },
                        required: ["question", "options", "correctAnswer", "explanation"],
                        additionalProperties: false
                    }
                }
            },
            required: ["quiz"],
            additionalProperties: false
        }
    }
};



export async function LLM({ topic, totalMcqs }) {
    
    const SYSTEM_PROMPT = `Generate exactly ${totalMcqs} high-quality MCQ questions on the topic the user provides in the prompt. Follow the FBISE (Federal Board Pakistan) SLO-based examination style. Ensure questions target Conceptual Understanding and Application levels.`;
    
    const response = await groq.chat.completions.create({
    model: model,
    messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: topic },
    ],
    response_format: quizSchema
    });


    const rawContent = response.choices[0].message.content || "{}";
    const output = JSON.parse(rawContent);
    
    console.log(output);
    return output.quiz; 
}
