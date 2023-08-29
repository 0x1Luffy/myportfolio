"use client" // Next.js works on both client and backend so we need to specify this we are using it on clint side only
import React from 'react'

const page = () => {
  return(
    <>
    <div id='wrapper' className='bg-black w-[100vw] h-[100vh] grid grid-cols-12 grid-rows-12 gap-7'>
    <div className='bgColor'>1</div>
    <div className='bgColor'>2</div>
    <div className='bgColor'>3</div>
    <div className='bgColor'>4</div>
    <div className='bgColor'>5</div>
    <div className='bgColor'>6</div>
    <div className='bgColor'>7</div>
    <div className='bgColor'>8</div>
    <div className='bgColor'>9</div>
    <div className='bgColor'>10</div>
    <div className='bgColor'>11</div>
    <div className='bgColor'>12</div>
    </div>
    </>
  )
  
}

export default page