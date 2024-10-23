import React from 'react'
import TextEffect from './TextEffect'
import Image from 'next/image'
import images from "@/app/assets/image.jpeg"
import Link from 'next/link'

function Home() {
  return (
    <div id="home" className='min-h-screen flex flex-col lg:flex-row justify-center mt-10 mx-10'>
      <div className='flex flex-col items-center lg:items-start'>
        <h1 className='text-black pt-28 font-semibold text-4xl'>Hi, I am Laiba Khalid</h1>
        <TextEffect/>
        <p className='mt-4 text-3xl font-light text-gray-800 max-w-3xl mx-auto lg:mx-0'>A passionate frontend developer crafting elegant and responsive web designs</p>
        <Link href="#contact" passHref><button className='mt-6 px-8 py-4 bg-black text-xl text-white rounded-full hover:bg-neutral-700 transition duration-300 ease-in-out'>
          Get in Touch
        </button>
        </Link>
      </div>

      <div className='relative w-[300px] h-[300px] mt-16 lg:mt-20 lg:ml-16'>
        {/* Running Border */}
        <div className='absolute hidden lg:flex rounded-lg inset-0 border-4 border-t-black border-r-black border-b-black border-l-black animate-running-border'></div>
        <Image
          className='object-cover w-full h-full rounded-none'
          src={images}
          alt="Laiba's Picture"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}

export default Home;
  



      