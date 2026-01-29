import {React, useState} from 'react'
import Summary from './Summary';
import Review from './Review';
import { Button } from '@/components/ui/button';

const Result = () => {
    const [view, setView]=useState("summary");
    const wrong = {"question1":"[your answer, answer]"};
  return (
    <div className='w-[80vw] h-[90vh] border  flex flex-col rounded-lg overflow-hidden shadow-lg items-center justify-start text-black text-2xl font-bold'>
        <div className='w-full h-20 flex justify-evenly items-center'><Button className='bg-stone-900' onClick={()=>setView("summary")}>Summary</Button> <Button className='bg-stone-900' onClick={()=>setView("review")}>Review</Button></div>
        <div className='w-full flex-1 '>
            {view==="summary"?<Summary/>:<Review/>}
        </div>
    </div>
  )
}

export default Result