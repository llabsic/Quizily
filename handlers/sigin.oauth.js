import { supabase } from "@/lib/supabase/client";
import { toast } from "@heroui/react";
import { redirect } from "next/navigation";

export async function SignInWithOAuth(provider = "google") {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/v1/callback`,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    console.error("OAuth error:", error);
    throw error;
  }

  return data;
}

export const handleGoogleSignIn = async () => {
  try {
    await SignInWithOAuth("google");
  } catch (error) {
    // Show error toast
  }
};

export const handleXSignIn = async () => {
  try {
    await SignInWithOAuth("x");
  } catch (error) {
    // Show error toast
  }
};

export const handleGithubSignIn = async () => {
  try {
    await SignInWithOAuth("github");
  } catch (error) {
    // Show error toast
  }
};

export const handleLogOut = async () => {
  try {
    const { error } = await supabase.auth.signOut({ scope: "local" });

    if (!error) {
      toast.success("Logged out successfully.");
      redirect("/");
    }
  } catch (error) {
    console.error("Logout failed:", error);
    toast.danger("Logout failed. Please try again.");
  }
};
