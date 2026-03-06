"use client"

import { use } from "react";

export default function Page({ params }){
    
    const { subject } = use(params);
    
    return(
        <>
        {subject}
        </>
    )
}