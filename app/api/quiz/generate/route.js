import { NextResponse } from "next/server";
import { generateQuiz } from "@/services/quizService";

export async function POST(req) {

  try {
    const { topic, totalMcqs } = await req.json();

    if (!topic || topic.length > 50) {
      return NextResponse.json({ success: false, error: "Invalid topic" }, { status: 400 });
    }

    const quiz = await generateQuiz(topic,totalMcqs)

    return NextResponse.json({
      success: true,
      quiz,
    });

  } catch (error) {
    console.error("Generation Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}