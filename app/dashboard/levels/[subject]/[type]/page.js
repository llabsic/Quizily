"use client"

import { use } from "react";

export default function Page({ params }){
    
    const { type, subject } = use(params);

    return(
        <>
        {type+" "}
        {subject}
        </>
    )
}