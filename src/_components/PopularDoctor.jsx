import React from 'react'
import Image from 'next/image'

const PopularDoctor = () => {
  return (
   <>
   <div className='mb-8 px-10 md:px-0 ' >
    <h1 className='text-4xl my-4 font-bold ' >Popular Doctor</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-center  ' >
      {/* first card */}
      <div className="card bg-slate-50 border-2 border-gray-100 px-3 py-3 w-80   md:w-64  ">
        <Image
        className='rounded-lg'
        src='/doctor-one.jpg'
        alt='doctor-one'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs bg-blue-100 px-2 py-1 rounded-full font-medium  ' >Neurologist</span>
        <h4 className='font-bold text-xl mt-2 ' >Dr Priyanka</h4>
        <span className='text-[#0c1019]' >25 years</span>
        <p className='text-gray-600' >Biratnagr 06, Buddha chowk</p>
        </div>
        <button className='w-full border-2 border-[#272E3F] mt-3 rounded-lg text-md ' >Book Now</button>
      </div>
      {/* second card */}
      <div className="card bg-slate-50 border-2 border-gray-100 px-3 py-3 w-80   md:w-64 ">
        <Image
        className='rounded-lg'
        src='/doctor-two.jpg'
        alt='doctor-two'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs bg-green-100 px-2 py-1 rounded-full font-medium  ' >Cardiologist</span>
        <h4 className='font-bold text-xl mt-2 ' >Dr Amit</h4>
        <span className='text-[#0c1019]' >20 years</span>
        <p className='text-gray-600' >Kathmandu, Thamel</p>
        </div>
        <button className='w-full border-2 border-[#272E3F] mt-3 rounded-lg text-md ' >Book Now</button>
      </div>
      {/* third card */}
      <div className="card bg-slate-50 border-2 border-gray-100 px-3 py-3 w-80   md:w-64 ">
        <Image
        className='rounded-lg'
        src='/doctor-three.jpg'
        alt='doctor-three'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs bg-red-100 px-2 py-1 rounded-full font-medium  ' >Dermatologist</span>
        <h4 className='font-bold text-xl mt-2 ' >Dr Sunita</h4>
        <span className='text-[#0c1019]' >18 years</span>
        <p className='text-gray-600' >Lalitpur, Pulchowk</p>
        </div>
        <button className='w-full border-2 border-[#272E3F] mt-3 rounded-lg text-md ' >Book Now</button>
      </div>
      {/* fourth card */}
      <div className="card bg-slate-50 border-2 border-gray-100 px-3 py-3 w-80   md:w-64 ">
        <Image
        className='rounded-lg'
        src='/doctor-four.jpg'
        alt='doctor-four'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs bg-yellow-100 px-2 py-1 rounded-full font-medium  ' >Pediatrician</span>
        <h4 className='font-bold text-xl mt-2 ' >Dr Sanjay</h4>
        <span className='text-[#0c1019]' >15 years</span>
        <p className='text-gray-600' >Bhaktapur, Durbar Square</p>
        </div>
        <button className='w-full border-2 border-[#272E3F] mt-3 rounded-lg text-md ' >Book Now</button>
      </div>
      {/* fifth card */}
      <div className="card bg-slate-50 border-2 border-gray-100 px-3 py-3 w-80   md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-five.jpg'
        alt='doctor-five'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs bg-purple-100 px-2 py-1 rounded-full font-medium  ' >Orthopedic</span>
        <h4 className='font-bold text-xl mt-2 ' >Dr Ravi</h4>
        <span className='text-[#0c1019]' >22 years</span>
        <p className='text-gray-600' >Pokhara, Lakeside</p>
        </div>
        <button className='w-full border-2 border-[#272E3F] mt-3 rounded-lg text-md ' >Book Now</button>
      </div>
      {/* sixth card */}
      <div className="card bg-slate-50 border-2 border-gray-100 px-3 py-3 w-80   md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-six.jpg'
        alt='doctor-six'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs bg-pink-100 px-2 py-1 rounded-full font-medium  ' >Ophthalmologist</span>
        <h4 className='font-bold text-xl mt-2 ' >Dr Sushma</h4>
        <span className='text-[#0c1019]' >12 years</span>
        <p className='text-gray-600' >Dharan, B.P. Koirala Institute</p>
        </div>
        <button className='w-full border-2 border-[#272E3F] mt-3 rounded-lg text-md ' >Book Now</button>
      </div>
      {/* seventh card */}
      <div className="card bg-slate-50 border-2 border-gray-100 px-3 py-3 w-80   md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-seven.jpg'
        alt='doctor-seven'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs bg-orange-100 px-2 py-1 rounded-full font-medium  ' >Psychiatrist</span>
        <h4 className='font-bold text-xl mt-2 ' >Dr Pritam</h4>
        <span className='text-[#0c1019]' >30 years</span>
        <p className='text-gray-600' >Birgunj, Adarsh Nagar</p>
        </div>
        <button className='w-full border-2 border-[#272E3F] mt-3 rounded-lg text-md ' >Book Now</button>
      </div>
      {/* eighth card */}
      <div className="card bg-slate-50 border-2 border-gray-100 px-3 py-3 w-80   md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-eight.jpg'
        alt='doctor-eight'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs bg-teal-100 px-2 py-1 rounded-full font-medium  ' >Gastroenterologist</span>
        <h4 className='font-bold text-xl mt-2 ' >Dr Rina</h4>
        <span className='text-[#0c1019]' >28 years</span>
        <p className='text-gray-600' >Hetauda, Bank Road</p>
        </div>
        <button className='w-full border-2 border-[#272E3F] mt-3 rounded-lg text-md ' >Book Now</button>
      </div>
      {/* ninth card */}
      <div className="card bg-slate-50 border-2 border-gray-100 px-3 py-3 w-80   md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-nine.jpg'
        alt='doctor-nine'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs bg-cyan-100 px-2 py-1 rounded-full font-medium  ' >Oncologist</span>
        <h4 className='font-bold text-xl mt-2 ' >Dr Mahesh</h4>
        <span className='text-[#0c1019]' >35 years</span>
        <p className='text-gray-600' >Janakpur, Ram Mandir</p>
        </div>
        <button className='w-full border-2 border-[#272E3F] mt-3 rounded-lg text-md ' >Book Now</button>
      </div>
      {/* tenth card */}
      <div className="card bg-slate-50 border-2 border-gray-100 px-3 py-3 w-80   md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-ten.jpg'
        alt='doctor-ten'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs bg-lime-100 px-2 py-1 rounded-full font-medium  ' >Nephrologist</span>
        <h4 className='font-bold text-xl mt-2 ' >Dr Rajesh</h4>
        <span className='text-[#0c1019]' >27 years</span>
        <p className='text-gray-600' >Damak, Mahendra Highway</p>
        </div>
        <button className='w-full border-2 border-[#272E3F] mt-3 rounded-lg text-md ' >Book Now</button>
      </div>
      {/* eleventh card */}
      <div className="card bg-slate-50 border-2 border-gray-100 px-3 py-3 w-80   md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-eleven.jpg'
        alt='doctor-eleven'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs bg-indigo-100 px-2 py-1 rounded-full font-medium  ' >Urologist</span>
        <h4 className='font-bold text-xl mt-2 ' >Dr Meera</h4>
        <span className='text-[#0c1019]' >24 years</span>
        <p className='text-gray-600' >Biratnagar, Road 02</p>
        </div>
        <button className='w-full border-2 border-[#272E3F] mt-3 rounded-lg text-md ' >Book Now</button>
      </div>
      {/* twelfth card */}
      <div className="card bg-slate-50 border-2 border-gray-100 px-3 py-3 w-80   md:w-64">
        <Image
        className='rounded-lg'
        src='/doctor-twelve.jpg'
        alt='doctor-twelve'
        width={300}
        height={300}
        />
        <div className="text my-2 ">
        <span className='text-xs bg-fuchsia-100 px-2 py-1 rounded-full font-medium  ' >Gynecologist</span>
        <h4 className='font-bold text-xl mt-2 ' >Dr Anjali</h4>
        <span className='text-[#0c1019]' >32 years</span>
        <p className='text-gray-600' >Chitwan, Bharatpur</p>
        </div>
        <button className='w-full border-2 border-[#272E3F] mt-3 rounded-lg text-md ' >Book Now</button>
      </div>
    </div>
   </div>
   </>
  )
}

export default PopularDoctor
