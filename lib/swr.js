import { supabase } from "./supabase"

export const fetchCourses = async () => {

  const { data, error } =
    await supabase.from("subjects").select("*")

  if (error) throw error

  return data
}