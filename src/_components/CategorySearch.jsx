import React from 'react'
import {Input} from  '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
const CategorySearch = () => {
  return (
    <div className='mb-10 flex items-center gap-2 flex-col  ' >
      <h2 className='tracking-wide text-4xl font-bold  ' >Search Doctors</h2>
      <p className='font-medium text-gray-500 dark:text-slate-200 ' >Take appoinment and find your best doctor here!</p>

      <div className="flex w-full max-w-sm items-center space-x-2  ">
      <Input type="text" placeholder="Search doctors!" className="outline-none" />
      <Button type="submit">
        <Search className='w-4 mr-3 ' />
        Search</Button>
    </div>
    </div>
  )
}

export default CategorySearch
