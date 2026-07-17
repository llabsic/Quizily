"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState("Verifying authentication...");

  useEffect(() => {
    const handleUser = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          setStatus("Authentication error. Please try again.");
          return;
        }

        if (!session?.user) {
          setStatus("No session found. Redirecting to login...");
          router.push("/login");
          return;
        }

        const user = session.user;

        setStatus("Setting up your account...");

        const { error: upsertError } = await supabase.from("users").upsert({
          id: user.id,
          email: user.email,
          username: user.user_metadata?.full_name || user.email?.split("@")[0] || "user",
          user_type: "user",
        }, { onConflict: 'id' });

        if (upsertError) {
          console.error("User upsert error:", upsertError);
        }

        setStatus("Checking profile...");

        const { data: existingProfile } = await supabase
          .from("user_profile")
          .select("user_id")
          .eq("user_id", user.id)
          .single();

        if (!existingProfile) {
          setStatus("Creating your profile...");

          const { error: profileError } = await supabase.from("user_profile").insert({
            user_id: user.id,
            total_correct_quiz: 0,
            total_mistakes: 0,
            retakes: 0,
            exp: 100,
            achievements: [{
              type: 'Primeval',
              year: new Date().getUTCFullYear(),
              description: `A ${new Date().getUTCFullYear()} legacy hero of Quizily.`,
              date: new Date().toUTCString()
            }]
          });

          if (profileError) {
            console.error("Profile creation error:", profileError);
          }
        }

        setStatus("Redirecting to dashboard...");
        router.push("/dashboard");

      } catch (error) {
        console.error("Callback error:", error);
        setStatus("Something went wrong. Please try again.");
      }
    };

    handleUser();
  }, [router]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <p>{status}</p>
    </div>
  );
}
