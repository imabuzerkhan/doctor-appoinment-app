import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import doctors   from '@/Data/data'; // Import doctors data

const PopularDoctor = () => {
  return (
    <div className='mb-8'>
      <h1 className=' text-2xl text-wrap md:text-4xl my-4 font-bold dark:text-white capitalize '>Chosse and get appoinment </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-center'>
        {doctors.map((doctor) => (
          <Link key={doctor.id} href={`/Details/${doctor.id}`}>
            <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
              <Image
                className='rounded-lg'
                src={doctor.image}
                alt={doctor.name}
                width={300}
                height={300}
              />
              <div className="text my-2">
                <span className='text-xs dark:text-white dark:bg-gray-700 bg-blue-100 px-2 py-1 rounded-full font-medium'>{doctor.specialty}</span>
                <h4 className='font-bold text-xl mt-2 dark:text-white'>{doctor.name}</h4>
                <span className='text-[#0c1019] dark:text-gray-300'>{doctor.experience}</span>
                <p className='text-gray-600 dark:text-gray-400'>{doctor.address}</p>
              </div>
              <button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500'>Book Now</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularDoctor;
