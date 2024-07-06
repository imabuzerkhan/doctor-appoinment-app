// pages/index.js
import Link from 'next/link';
import blogDetails from '@/Data/data';
export default function Home() {
  return (
    <div>
      <h1>Blog List</h1>
      <ul className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-4 ' >
        {blogDetails.map(blog => (
          <li key={blog.id}>
            <Link  href={`/blog/${blog.id}`}>
<article className="overflow-hidden rounded-lg border border-gray-100 bg-slate-50 dark:bg-gray-800 dark:border-none shadow-sm">
  <img src={blog.image}
  className='w-[385px] h-[229px] '
  />

  <div className="p-4 sm:p-6">
  
      <h3 className="text-lg font-medium text-gray-900 dark:text-white  ">
        {blog.title}
      </h3>
    

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-200 ">
     {blog.title}
    </p>

    <button className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-white ">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
      </button> 
  </div>
</article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
