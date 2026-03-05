import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

export default function Page() {
  const courses = [
    {
      title: "English",
      description: "Take Quiz For English.",
      image: "",
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
        <div className="border border-muted rounded-lg p-2">
          <div className="bg-linear-to-tr from-violet-600 to-slate-900 rounded-lg h-40 p-1">
            <Badge className="ml-0.5">{itm.title}</Badge>
          </div>
          <div>
          <p className="text-sm mt-1">{itm.description}</p>
          <Button className="w-full">Take Test</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
