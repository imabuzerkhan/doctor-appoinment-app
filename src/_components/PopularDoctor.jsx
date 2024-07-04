import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PopularDoctor = () => {
  return (
   <>
   <div className='mb-8 px-10 md:px-0 ' >
    <h1 className='text-4xl my-4 font-bold dark:text-white' >Popular Doctor</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-center' >
      {/* first card */}
      <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-one.jpg'
        alt='doctor-one'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs dark:text-red-900 dark:bg-gray-700 bg-blue-100 px-2 py-1 rounded-full font-medium' >Neurologist</span>
        <h4 className='font-bold text-xl mt-2 dark:text-white' >Dr Priyanka</h4>
        <span className='text-[#0c1019] dark:text-gray-300' >25 years</span>
        <p className='text-gray-600 dark:text-gray-400' >Biratnagr 06, Buddha chowk</p>
        </div>
        <Link href='/Booking'><button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500' >Book Now</button></Link>
      </div>
      {/* second card */}
      <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-two.jpg'
        alt='doctor-two'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs dark:bg-gray-700 bg-green-100 px-2 py-1 rounded-full font-medium' >Cardiologist</span>
        <h4 className='font-bold text-xl mt-2 dark:text-white' >Dr Amit</h4>
        <span className='text-[#0c1019] dark:text-gray-300' >20 years</span>
        <p className='text-gray-600 dark:text-gray-400' >Kathmandu, Thamel</p>
        </div>
        <button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500' >Book Now</button>
      </div>
      {/* third card */}
      <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-three.jpg'
        alt='doctor-three'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs dark:bg-gray-700 bg-red-100 px-2 py-1 rounded-full font-medium' >Dermatologist</span>
        <h4 className='font-bold text-xl mt-2 dark:text-white' >Dr Sunita</h4>
        <span className='text-[#0c1019] dark:text-gray-300' >18 years</span>
        <p className='text-gray-600 dark:text-gray-400' >Lalitpur, Pulchowk</p>
        </div>
        <button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500' >Book Now</button>
      </div>
      {/* fourth card */}
      <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-four.jpg'
        alt='doctor-four'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs dark:bg-gray-700 bg-yellow-100 px-2 py-1 rounded-full font-medium' >Pediatrician</span>
        <h4 className='font-bold text-xl mt-2 dark:text-white' >Dr Sanjay</h4>
        <span className='text-[#0c1019] dark:text-gray-300' >15 years</span>
        <p className='text-gray-600 dark:text-gray-400' >Bhaktapur, Durbar Square</p>
        </div>
        <button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500' >Book Now</button>
      </div>
      {/* fifth card */}
      <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-five.jpg'
        alt='doctor-five'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs dark:bg-gray-700 bg-purple-100 px-2 py-1 rounded-full font-medium' >Orthopedic</span>
        <h4 className='font-bold text-xl mt-2 dark:text-white' >Dr Ravi</h4>
        <span className='text-[#0c1019] dark:text-gray-300' >22 years</span>
        <p className='text-gray-600 dark:text-gray-400' >Pokhara, Lakeside</p>
        </div>
        <button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500' >Book Now</button>
      </div>
      {/* sixth card */}
      <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-six.jpg'
        alt='doctor-six'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs dark:bg-gray-700 bg-pink-100 px-2 py-1 rounded-full font-medium' >Ophthalmologist</span>
        <h4 className='font-bold text-xl mt-2 dark:text-white' >Dr Sushma</h4>
        <span className='text-[#0c1019] dark:text-gray-300' >12 years</span>
        <p className='text-gray-600 dark:text-gray-400' >Dharan, B.P. Koirala Institute</p>
        </div>
        <button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500' >Book Now</button>
      </div>
      {/* seventh card */}
      <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-seven.jpg'
        alt='doctor-seven'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs dark:bg-gray-700 bg-orange-100 px-2 py-1 rounded-full font-medium' >Psychiatrist</span>
        <h4 className='font-bold text-xl mt-2 dark:text-white' >Dr Pritam</h4>
        <span className='text-[#0c1019] dark:text-gray-300' >30 years</span>
        <p className='text-gray-600 dark:text-gray-400' >Birgunj, Adarsh Nagar</p>
        </div>
        <button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500' >Book Now</button>
      </div>
      {/* eighth card */}
      <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-eight.jpg'
        alt='doctor-eight'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs dark:bg-gray-700 bg-teal-100 px-2 py-1 rounded-full font-medium' >Gastroenterologist</span>
        <h4 className='font-bold text-xl mt-2 dark:text-white' >Dr Rina</h4>
        <span className='text-[#0c1019] dark:text-gray-300' >28 years</span>
        <p className='text-gray-600 dark:text-gray-400' >Hetauda, Bank Road</p>
        </div>
        <button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500' >Book Now</button>
      </div>
      {/* ninth card */}
      <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-nine.jpg'
        alt='doctor-nine'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs dark:bg-gray-700 bg-cyan-100 px-2 py-1 rounded-full font-medium' >Oncologist</span>
        <h4 className='font-bold text-xl mt-2 dark:text-white' >Dr Mahesh</h4>
        <span className='text-[#0c1019] dark:text-gray-300' >35 years</span>
        <p className='text-gray-600 dark:text-gray-400' >Janakpur, Ram Mandir</p>
        </div>
        <button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500' >Book Now</button>
      </div>
      {/* tenth card */}
      <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-ten.jpg'
        alt='doctor-ten'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs dark:bg-gray-700 bg-lime-100 px-2 py-1 rounded-full font-medium' >Nephrologist</span>
        <h4 className='font-bold text-xl mt-2 dark:text-white' >Dr Rajesh</h4>
        <span className='text-[#0c1019] dark:text-gray-300' >27 years</span>
        <p className='text-gray-600 dark:text-gray-400' >Damak, Mahendra Highway</p>
        </div>
        <button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500' >Book Now</button>
      </div>
      {/* eleventh card */}
      <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-eleven.jpg'
        alt='doctor-eleven'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs dark:bg-gray-700 bg-indigo-100 px-2 py-1 rounded-full font-medium' >Urologist</span>
        <h4 className='font-bold text-xl mt-2 dark:text-white' >Dr Meera</h4>
        <span className='text-[#0c1019] dark:text-gray-300' >24 years</span>
        <p className='text-gray-600 dark:text-gray-400' >Biratnagar, Road 02</p>
        </div>
        <button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500' >Book Now</button>
      </div>
      {/* twelfth card */}
      <div className="card dark:bg-gray-800 bg-slate-50 border-2 dark:border-gray-700 border-gray-100 px-3 py-3 w-80 md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-twelve.jpg'
        alt='doctor-twelve'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs dark:bg-gray-700 bg-fuchsia-100 px-2 py-1 rounded-full font-medium' >Gynecologist</span>
        <h4 className='font-bold text-xl mt-2 dark:text-white' >Dr Anjali</h4>
        <span className='text-[#0c1019] dark:text-gray-300' >32 years</span>
        <p className='text-gray-600 dark:text-gray-400' >Chitwan, Bharatpur</p>
        </div>
        <button className='w-full border-2 dark:text-white border-[#272E3F] mt-3 rounded-lg text-md dark:border-gray-500' >Book Now</button>
      </div>
    </div>
   </div>
   </>
  )
}

export default PopularDoctor
