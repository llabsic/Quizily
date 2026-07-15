"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase/server";
import { useRouter } from "next/navigation"; 
export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.user) return;
      const user = session.user;

      await supabase.from("users").upsert({
        id: user.id,
        email: user.email,
        username: user.user_metadata.full_name,
        user_type: "user",
      }, { onConflict: 'id' });

     
      const { data: existingProfile } = await supabase
        .from("user_profile")
        .select("user_id")
        .eq("user_id", user.id)
        .single();

      
      if (!existingProfile) {
        await supabase.from("user_profile").insert({
          user_id: user.id,
          total_correct_quiz: 0,
          total_mistakes: 0,
          retakes: 0,
          exp: 100,
          achievements: [{ 
            type: 'Primeval', 
            year: new Date().getUTCFullYear(), 
            desciption: `A ${new Date().getUTCFullYear()} legacy hero of Quizily.`, 
            date: new Date().toUTCString() 
          }]
        });
      }
      
      router.push("/");
    };

    handleUser();
  }, [router]);

  return <p>Logging you in...</p>;
}
