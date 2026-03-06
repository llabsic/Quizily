import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  const courses = [
    {
      title: "English",
      description: "Take Quiz based on English gramer.",
      image: "",
      keywords: ["Pentuation", "Clauses", "Paricipals"],
    },
    {
      title: "Physics",
      description: "Take Quiz For English.",
      image: "",
    },
    {
      title: "Urdu",
      description: "Take Quiz For English.",
      image: "",
    },
    {
      title: "Computer",
      description: "Take Quiz For English.",
      image: "",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {courses.map((itm, idx) => (
        <div className="border-2 border-muted rounded-lg p-2 cursor-pointer hover:border-muted-foreground transition-colors">
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
