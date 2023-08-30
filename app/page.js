"use client" // Next.js works on both client and backend so we need to specify this we are using it on clint side only
import Leftside from '@/Components/Leftside'
import Rightside from '@/Components/Rightside'
import React from 'react'


const page = () => {
  return(
    <div className='flex flex-row justify-center items-center'>
      <Leftside></Leftside>
      <Rightside></Rightside>
      </div>
  )
  
}

export default page