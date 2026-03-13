"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/server";

export default function UserInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error) setUser(data.user);
    };
    
    const getConfirmedUser = async () => {
      const res = await fetch("/api/auth/v1/user", { method: "GET" });
      
      const json = await res.json(); // ✅ await this
      console.log("User API response:", json);
    };
    
    getUser();
    getConfirmedUser();
  }, []);

  if (!user) return <p>Not logged in</p>;

  return (
    <div>
      <p>Email: {user.email}</p>
      <p>Name: {user.user_metadata.full_name}</p>
      <img src={user.user_metadata.picture} width={80} />
    </div>
  );
}
