"use client"

import { useParams } from 'next/navigation';
import doctors from '@/Data/data';
import Image from 'next/image';
import Booking from '../_components/Booking';
import PopularDoctor from '@/_components/PopularDoctor';


const page = () => {
  const params = useParams();
  const { id } = params;

  // Debugging logs
  console.log('Params:', params);
  console.log('ID:', id);
  console.log('Parsed ID:', parseInt(id));

  const item = doctors.find(item => item.id === parseInt(id) );

  if (!item) {
    return <p>Doctor not found for ID: {id}</p>;
  }

  return (
    <div className='my-20 flex flex-col justify-center'>
      <Image
        src={item.image}
        alt='first-img'
        width={150}
        height={150}
        className='rounded-full object-cover w-40 h-40'
      />
      <div className='md:flex justify-between'>
        <div className='flex flex-col items-baseline justify-center my-7 space-y-2'>
          <h2 className='bg-slate-200 text-black rounded-full px-4 py-1'>{item.specialty}</h2>
          <h2 className='font-bold text-2xl md:text-4xl'>{item.title}</h2>
          <span className='md:text-md'>{item.experience}</span>
          <p>{item.address}</p>
        </div>
        <div>
          <Booking />
        </div>
      </div>
      <div className='space-y-2 mt-4 md:mt-0'>
        <h2 className='font-bold md:text-4xl text-2xl'>Description</h2>
        <p className='text-md md:text-xl dark:text-white text-gray-500 leading-8'>{item.description}</p>
      </div>
      <div className='my-10' >
        
        <PopularDoctor  />
      </div>
    </div>

  );
}

export default page;
