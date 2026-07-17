"use client";

import { supabase } from "@/lib/supabase/client";
import {useEffect, useState} from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getSession();
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
