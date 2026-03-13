import { supabase } from "./supabase/client"

export const fetchCourses = async () => {

  const { data, error } =
    await supabase.from("subjects").select("*");

  if (error) throw error;

  return data;
}

export const fetchCoursesTopics = async (id) => {
  const { data, error } = await supabase
  .from("subject_type")
  .select("name, description").eq("subject_id",id);
  
  console.log("useCoursesTopic",data);

  if(error) throw error;

  return data;
}