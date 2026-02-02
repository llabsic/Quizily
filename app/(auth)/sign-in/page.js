"use client"

import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase"

export default function Page(){

    const handleSigIn = () =>{
        supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: "http://localhost:3000/v1/callback" // v1/callback
            }
        })
    }

    return(
        <div className="w-full h-svh grid place-content-center">
            <Button onClick={handleSigIn}>SignIN</Button>
        </div>
    )
}