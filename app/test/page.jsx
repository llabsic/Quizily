"use client"

import { useSelector } from "react-redux"

export default function Page() {
    const Result = useSelector((_state)=> _state.quizes.value);
  return(
        <div>
            {Result}
        </div>
  )
}
