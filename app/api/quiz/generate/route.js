import { NextResponse } from "next/server";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not defined in environment variables");
}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { topic } = await req.json();

    if (!topic || topic.length > 50) {
      return NextResponse.json({ success: false, error: "Invalid topic" }, { status: 400 });
    }

    const schema = {
      description: "a list of 10 programming multiple choice questions based on full stackdevelopment.",
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.OBJECT,
        properties: {
          questionNumber: { type: SchemaType.INTEGER },
          question: { type: SchemaType.STRING },
          options: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.OBJECT,
              properties: {
                answer: { type: SchemaType.STRING },
                isCorrect: { type: SchemaType.BOOLEAN }
              },
              required: ["answer", "isCorrect"]
            }
          }
        },
        required: ["question", "options"]
      }
    };

    // 2. Initialize Model with Schema
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const prompt = `Generate exactly 10 high-quality MCQ questions on the topic: ${topic}. 
    Follow the FBISE (Federal Board Pakistan) SLO-based examination style.`;

    // 3. Generate Content
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    // 4. Parse and Return
    const quiz = JSON.parse(responseText);

    return NextResponse.json({
      success: true,
      quiz,
    });

  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}