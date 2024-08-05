"use client"

import { useParams } from 'next/navigation';
import {blogDetails} from '@/Data/data';
import Image from 'next/image';

export default function BlogDetails() {
  const params = useParams();
  const { id } = params;
 

  const blog = blogDetails.find(blog => blog.id === parseInt(id));



  return (
    <div className='my-10  ' >
      <div className="first-part">
      <h1 className='font-bold text-3xl ' >{blog.title}</h1>
      <p className='font-medium text-md mt-4 '>{blog.description}</p>
      <Image src={blog.image} alt={blog.title} 
    
      width={400}
      height={300}
      className='  object-cover rounded-2xl my-4 h-64 ' />
      </div>
     
<div className='details space-y-4 mt-10 text-lg ' >
<h3>{blog.details1}</h3>
<h3>{blog.details2}</h3>
<h3>{blog.details3}</h3>
</div>
<div className='mt-5 text-lg' >
  <h1 className='font-bold text-2xl mb-2 ' >Conclusion</h1>
  <h3>{blog.conclusion}</h3>
</div>
    
    </div>
  );
}
