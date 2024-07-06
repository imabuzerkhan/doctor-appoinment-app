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
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <p>{blog.details}</p>
      <img src={blog.image} alt={blog.title} />
    </div>
  );
}
