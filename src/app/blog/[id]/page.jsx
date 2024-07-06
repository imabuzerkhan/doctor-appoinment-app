"use client"

import { useParams } from 'next/navigation';
import blogDetails from '@/Data/data';
import Image from 'next/image';

export default function BlogDetails() {
  const params = useParams();
  const { id } = params;

  // if (!id) return null; // Render nothing or a loading indicator until id is available

  const blog = blogDetails.find(blog => blog.id === parseInt(id));

  // if (!blog) return <div>Blog not found</div>;

  return (
    <div className='my-10  ' >
      <h1 className='font-bold text-3xl ' >{blog.title}</h1>
      <p className='font-medium text-md mt-4 '>{blog.description}</p>
      <Image src={blog.image} alt={blog.title} 
    
      width={700}
      height={256}
      className=' w-full object-cover rounded-2xl my-4 h-64 ' />

      <p className=' font-[300] text-xl ' >{blog.details}</p>
    </div>
  );
}
