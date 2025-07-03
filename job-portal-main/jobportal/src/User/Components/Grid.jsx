import React from 'react'

function Grid() {
    
  return (
    // <div className='m-4 grid gap-4 sm:grid-cols-2 grid-cols-2'>
    //   <div className='min-h-[100px] rounded-lg shadow bg-yellow-300'></div>
    //   <div className='min-h-[100px] rounded-lg shadow bg-purple-800'></div>
    // </div>
    //    <div className='m-4 grid gap-4 sm:grid-cols-4 '>
    //   <div className='min-h-[100px] rounded-lg shadow bg-yellow-300'></div>
    //   <div className='min-h-[100px] rounded-lg shadow bg-purple-800'></div>
    //         <div className='min-h-[100px] rounded-lg shadow bg-red-800'></div>
    //             <div className='min-h-[100px] rounded-lg shadow bg-teal-800'></div>
    // </div>
       <div className='m-4 grid sm:grid-cols-12 gap-4'>
      <div className='sm:cols-span-10 min-h-[100px] rounded-lg shadow bg-yellow-300'></div>
      <div className='min-h-[100px] rounded-lg shadow bg-purple-800'></div>
            <div className='min-h-[100px] rounded-lg shadow bg-yellow-800'></div>
    
    </div>
  )
}

export default Grid
