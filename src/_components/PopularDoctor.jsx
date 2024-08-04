import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const doctors = [
  { id: 'dr-priyanka', name: 'Dr Priyanka', specialty: 'Neurologist', experience: '25 years', location: 'Biratnagar 06, Buddha chowk', image: '/doctor-one.jpg' },
  { id: 'dr-amit', name: 'Dr Amit', specialty: 'Cardiologist', experience: '20 years', location: 'Kathmandu, Thamel', image: '/doctor-two.jpg' },
  { id: 'dr-sunita', name: 'Dr Sunita', specialty: 'Dermatologist', experience: '18 years', location: 'Lalitpur, Pulchowk', image: '/doctor-three.jpg' },
  { id: 'dr-sanjay', name: 'Dr Sanjay', specialty: 'Pediatrician', experience: '15 years', location: 'Bhaktapur, Durbar Square', image: '/doctor-four.jpg' },
  { id: 'dr-ravi', name: 'Dr Ravi', specialty: 'Orthopedic', experience: '22 years', location: 'Pokhara, Lakeside', image: '/doctor-five.jpg' },
  { id: 'dr-sushma', name: 'Dr Sushma', specialty: 'Ophthalmologist', experience: '12 years', location: 'Dharan, B.P. Koirala Institute', image: '/doctor-six.jpg' },
  { id: 'dr-pritam', name: 'Dr Pritam', specialty: 'Psychiatrist', experience: '30 years', location: 'Birgunj, Adarsh Nagar', image: '/doctor-seven.jpg' },
  { id: 'dr-rina', name: 'Dr Rina', specialty: 'Gastroenterologist', experience: '28 years', location: 'Hetauda, Bank Road', image: '/doctor-eight.jpg' },
  { id: 'dr-mahesh', name: 'Dr Mahesh', specialty: 'Oncologist', experience: '35 years', location: 'Janakpur, Ram Mandir', image: '/doctor-nine.jpg' },
  { id: 'dr-rajesh', name: 'Dr Rajesh', specialty: 'Nephrologist', experience: '27 years', location: 'Damak, Mahendra Highway', image: '/doctor-ten.jpg' },
  { id: 'dr-meera', name: 'Dr Meera', specialty: 'Urologist', experience: '24 years', location: 'Biratnagar, Road 02', image: '/doctor-eleven.jpg' },
  { id: 'dr-anjali', name: 'Dr Anjali', specialty: 'Gynecologist', experience: '32 years', location: 'Chitwan, Bharatpur', image: '/doctor-twelve.jpg' }
];

const PopularDoctor = () => {
  return (
    <div className='mb-8'>
      <h1 className='text-4xl my-4 font-bold dark:text-white'>Popular Doctor</h1>
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
                <p className='text-gray-600 dark:text-gray-400'>{doctor.location}</p>
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
