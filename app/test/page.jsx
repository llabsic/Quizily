import { useSelector } from "react-redux";
import { useSupabase } from "@/hooks/useSupabase";

export default async function Page() {
  const { supabase } = useSupabase();
  const data = await supabase.auth.getUser();
  console.log(data)

  // const Result = useSelector((_state) => _state.quizes.value);
  return <div></div>;
}
