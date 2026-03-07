import { createClient } from "@supabase/supabase-js";
export function useSupabase(){
  const supabase = createClient("https://loddpbjlegbzhyabyxfa.supabase.co", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  return { supabase }
}