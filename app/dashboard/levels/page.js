'use client'
import useSWR from "swr";
import {fetchCourses} from '@/lib/swr'
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { ArrowUpRight } from "lucide-react";
import { useState,useEffect } from "react";

export default function Page() {
  const {data:courses,isLoading,error}=useSWR('subjects',fetchCourses)
  
  if (isLoading){
   return <div>Loading...</div>
  }
  if (error){
   return <div>Error occured while fetching {error.message}</div>
  }
  if (!courses){
   return <div>No courses found</div>
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      
      {courses.map((itm, idx) => (
        <div key={itm.id} className="border-2 border-muted rounded-lg p-2 cursor-pointer hover:border-muted-foreground transition-colors">
          <div className="w-full flex items-center justify-end h-4">
            <ArrowUpRight className="size-4" />
          </div>
          <span className="text-xl">{itm.title}</span>
          <p className="text-sm">{itm.description}</p>
          <div className="flex flex-row gap-1 flex-wrap ml-1 mt-3 mb-4">
            {itm?.keywords?.map((itm, idx) => (
              <Badge key={String(itm + idx)}>{itm}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
