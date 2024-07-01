import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const Header = () => {
  const menu=[{
      id:1,
      name:'Home',
      path:'/'
  },
  {
    id:2,
    name:'Explore',
    path:'/'
},
{
  id:3,
  name:'Contact Us',
  path:'/'
}]
  return (
   <>
   <div className='flex items-center justify-between p-4 shadow-md ' >
   <div className='flex items-center  gap-10 ' >
  <Image
  src='/logo.svg'
  alt='logo'
  width={180}
  height={80}
  />

<ul className='md:flex gap-8 hidden  ' >
  {
    menu.map((item,index)=>(
      <Link href="/" key={index} className='hover:text-blue-950 font-medium ' >{item.name}</Link>
    ))
  }
</ul>


   </div>
   <Button>Get Started </Button>
   </div>
   </>




  )
}

export default Header
