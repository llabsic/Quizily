"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default function AuthCallback() {
  useEffect(() => {
    const handleUser = async () => {
      // 1️⃣ Get session
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) return;
      console.log("session:", session);
      console.log("user:", session?.user);
      
      const user = session.user;

      await supabase.from("users").upsert({
        id: user.id,
        email: user.email,
        username: user.user_metadata.full_name,
        user_type: "user",
      });
    };

    handleUser();
    redirect("/")
  }, []);

  return <p>Logging you in...</p>;
}
