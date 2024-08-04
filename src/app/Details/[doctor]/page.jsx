"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const {doctorId} = useParams


  useEffect(()=>{

  },[doctorId])
  return (
    <div>
      i am appoinment page
    </div>
  )
}

export default page
