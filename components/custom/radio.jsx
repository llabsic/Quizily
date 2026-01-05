import { useId } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

export const RadioGrp = ({ children, value, onValueChange }) => {
  return (
    <RadioGroup
      className="w-full max-w-96 gap-0 -space-y-px rounded-md shadow-xs"
      value={value}
      onValueChange={onValueChange}
    >
      {children}
    </RadioGroup>
  )
}

export const RadioItm = ({ children, value, className, ...props }) => {
  const id = useId()

  return (
    <div
      className="border-input has-data-[state=checked]:border-primary/50
                 has-data-[state=checked]:bg-accent relative flex flex-col
                 gap-4 border p-4 outline-none first:rounded-t-md
                 last:rounded-b-md has-data-[state=checked]:z-10"
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem
          id={id}
          value={value}
          className={cn("after:absolute after:inset-0", className)}
          {...props}
        />
        <Label htmlFor={id} className="cursor-pointer">
          {children}
        </Label>
      </div>
    </div>
  )
}
