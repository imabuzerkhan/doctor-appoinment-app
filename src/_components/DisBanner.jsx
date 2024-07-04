import React from 'react'
import Image from 'next/image'
const DisBanner = () => {
  return (
    <div className='my-10' >
      <section className="overflow-hidden rounded-lg shadow-xl md:grid md:grid-cols-3">
<Image 
src='/banner-doc.avif'
alt='doctor-banner'
width={600}
height={600}
  className="h-32 w-full object-cover md:h-full"
>

</Image>

  <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 dark:bg-gray-800 bg-slate-100 ">
    <p className="text-sm font-semibold uppercase tracking-widest">Run with the pack</p>

    <h2 className="mt-6 font-black uppercase">
      <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> Get 20% off </span>

      <span className="mt-2 block text-sm">On your appoinment charge over $50</span>
    </h2>

    <a
      className="mt-8 inline-block w-full border-2 border-[#272E3F] dark:border-white py-4 text-sm font-bold uppercase tracking-widest text-black dark:text-white"
      href="#"
    >
      Get Discount
    </a>

    <p className="mt-8 text-xs font-medium uppercase text-gray-400">
      Offer valid on monday&thursday, 2024 *
    </p>
  </div>
</section>
    </div>
  )
}

export default DisBanner
