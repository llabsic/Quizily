"use client"

import { use } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchCoursesTopics } from "@/lib/swr";
export default function Page({ params }){
    
    const query = useSearchParams();
    const id = query.get("id");
    const { subject } = use(params);
    const { data: topics, isLoading, error } = useSWR("topics",fetchCoursesTopics(id));
    
    return(
        <div>
            <h1 className="text-4xl">{subject}</h1>
            <p>{topics}</p>
        </div>
    )
}