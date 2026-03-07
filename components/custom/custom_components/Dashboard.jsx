import React from 'react'
const Dashboard = () => {
    const Mainoptions=[{name:"Dashboard", path:"/dashboard"}, {name:"Quiz", path:"/quiz"}, {name:"Settings", path:"/settings"}, {name:"Logout", path:"/logout"}]
  return (
    <div className='w-screen h-screen flex'>
        <div className='w-1/5 h-full bg-red-500 flex flex-col items-center justify-center'>
        <div className='w-full min-h-[200px] bg-green-500 flex flex-col items-center justify-center text-center'>
        {Mainoptions.map((option)=>(
            <div key={option.name} className='w-full h-1/2 rounded-lg shadow-lg mx-2 my-1 items-center bg-stone-200 flex justify-center font-bold text-xl hover:bg-stone-300 transition-all duration-300'>
            <a href={option.path} className='w-full h-1/2 text-black font-bold text-xl'>{option.name}</a>
            </div>
        ))}
        </div>
        <div className='w-full flex-1 bg-yellow-500'>others</div>
        </div>
        <div className='flex-1 h-full bg-blue-500'>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Dashboard