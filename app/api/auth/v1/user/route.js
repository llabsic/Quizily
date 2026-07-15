import { supabase } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error || !session) {
    return NextResponse.json(
      { user: null, message: "unauthorized" },
      { status: 401 }
    );
  }

  const { data: databaseData, error: dbError } = await supabase
    .from("users")
    .select("*")
    .eq("id", session.user.id)
    .single();

  if (dbError) {
    return NextResponse.json(
      { message: "Database error" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { InDB: databaseData },
    { status: 200 }
  );
}