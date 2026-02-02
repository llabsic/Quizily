import { useSupabase } from "@/hooks/useSupabase"

export default async function Page() {
    const { supabase } = useSupabase();
    
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    
    console.log(user);
    
    const { error } = await supabase
        .from("users")
        .upsert({
            id: user?.id,
            username: "example_user",
            email: user?.email,
            user_type: "standard"
        });
    
    if (error) console.error("Insert error:", error);

    return (
        <div className="h-svh w-full grid place-content-center">
            <span>Processing complete for user: {user?.email}</span>
        </div>
    )
}
