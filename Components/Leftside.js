import React from 'react'

const Leftside = () => {
  return (
    <div className=' leftContent  h-[750px] w-[297px] mt-16 rounded-lg'>
    <div className='wrapper flex justify-center h-full w-full'>
    <div className=' profilePic flex justify-center h-36 w-40 rounded-[65px] mt-20 absolute'><img src='https://i.ibb.co/qnptq58/9434621.png' className='h-36 w-36'/></div>
    <div className='myName h-10 w-full mt-64 text-center text-white font-bold text-2xl absolute'>CHETAN KESARE</div>
    <div className='myTagline h-8 w-auto px-2 mt-[315px] text-center rounded-[50px] pt-2 text-white text-xs font-medium text-opacity-75'>FULL STACK UX DESIGNER</div>
    <div className='lineStyle w-64 h-0.5 absolute mt-[380px] rounded-[50px]'></div>
    <div className='cardsStyle w-10 h-10 bg-gray-50 absolute'>   
    </div>
    </div>
    </div>
  )
}

export default Leftside