"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { doctors } from '@/Data/data'
import Image from 'next/image'

const page = () => {
  const {doctorId} = useParams();
  


  useEffect(()=>{


  },[doctorId])
  return (
    <div>
     {
      doctors.map((item )=>(
<div  key={item.id} className='my-20 flex flex-col justify-center  '  >
  <Image
  src={item.image}
  alt='first-img'
  width={150}
  height={150}
  className='rounded-full object-cover w-40 h-40  '


  
  
  />
  <div className='flex flex-col items-baseline justify-center my-7 space-y-2 ' >
    <h2 className='bg-slate-200 text-black rounded-full px-4 py1 ' >{item.specialty}</h2>
    <h2 className='font-bold text-2xl md:text-4xl   ' >{item.name}</h2>
    <span className='md:text-md  ' >{item.experience}</span>
    <p>{item.address}</p>

  </div>
  <div className='space-y-2' > 
    <h2 className='font-bold md:text-4xl text-2xl   ' >Description</h2>
    <p className='  text-md md:text-xl dark:text-white text-gray-500 leading-8 ' >{item.description}</p>
     </div>
</div>
      ))
     }
    </div>
  )
}

export default page
