"use client"

import { useParams } from 'next/navigation';
import blogDetails from '@/Data/data';

export default function BlogDetails() {
  const params = useParams();
  const { id } = params;

  // if (!id) return null; // Render nothing or a loading indicator until id is available

  const blog = blogDetails.find(blog => blog.id === parseInt(id));

  // if (!blog) return <div>Blog not found</div>;

  return (
    <div className='my-10 ' >
      <h1 className='font-bold text-3xl ' >{blog.title}</h1>
      <p className='font-medium text-xl '>{blog.description}</p>
      <img src={blog.image} alt={blog.title} className=' w-full object-cover rounded-2xl my-4 h-64 ' />

      <p className='font-sans font-[600] text-lg ' >{blog.details}</p>
    </div>
  );
}
