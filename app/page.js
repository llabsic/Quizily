"use client"

import { MaterialButton } from "@/components/materialui/Button";
import { MaterialCheckbox } from "@/components/materialui/Checkbox";
import { MaterialChip, MaterialChipSet, MdIcon } from "@/components/materialui/Chip";
import { User } from "lucide-react";

function Home() {

  return (
    <div className="p-3">
      <h1>Material desin UI</h1>
      <div className="flex flex-col">
        <MaterialButton onClick={() => alert("hello")} variant="outlined">Hello</MaterialButton>
        <MaterialCheckbox onChange={() => alert("hello check")} label="click me" />
        <MaterialChipSet>
          <MaterialChip
            type="filter"
            label="Assist with icon"
            icon={<User className="size-6"/>}
          />

          
        </MaterialChipSet>

      </div>
    </div>
  )
}
export default Home;