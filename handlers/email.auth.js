import { supabase } from "@/lib/supabase/client";

export async function SignUpWithEmail(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Sign-up error:", error);
    return { success: false, error };
  }

  return { success: true, data };
}

export async function SignInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Sign-in error:", error);
    return { success: false, error };
  }

  return { success: true, data };
}
