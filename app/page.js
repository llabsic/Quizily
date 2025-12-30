"use client"

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function Home() {

  return (
    <>
      <h1 className="text-3xl">Hello Abubakar, umair, quddus </h1>
      <p>Hello I edited Umair's code. Please try to use professional language while commiting.</p>
      <Button onClick={() => alert("i am clicked")}>Click Me</Button>
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <Button>Click</Button>
        </PopoverContent>
      </Popover>
    </>
  )
}
export default Home;