// import React from 'react'
// import Image from 'next/image'
// import images from "@/app/assets/image.jpeg"
// import { ArrowDownIcon } from '@heroicons/react/24/solid'
// function About() {
//   return (
//     <div className='min-h-screen'>
//       <div className=' flex flex-col justify-center items-center '>
//         <h1 className='text-black font-semibold text-4xl mb-2 '>About me</h1>
//         <h2 className='text-neutral-800 text-lg'>My introduction</h2>
//       </div>
//       <div className='grid grid-cols-2 gap-16 mt-14 py-4 pl-10'>
//       <div className='mt-10 pl-16'>
//           <Image
//         src={images}
//         alt="picture"
//         width={300}
//         height={300}
//         />
//         </div>

//         <div className='mt-16 pl-16'>
//           <p className='text-zinc-900 text-2xl'>I love building websites that are easy to
//              use and look great. I'm always eager to learn new technologies and improve 
//              my skills to stay updated in the world of web development.
//           </p>
//           <div className='flex items-center space-x-2 mt-6'>
//           <button className='bg-black text-white text-xl rounded-3xl px-8 py-4 flex items-center space-x-2'>Download CV
//           <ArrowDownIcon className='h-5 w-6 ml-2'/>
//           </button>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default About



import React from 'react';
import Image from 'next/image';
import images from "@/app/assets/image.jpeg";
import { ArrowDownIcon } from '@heroicons/react/24/solid';

function About() {
  return (
    <div id="about" className='min-h-screen flex flex-col items-center justify-center px-4 md:px-0 '>
      <div className='text-center'>
        <h1 className='text-black font-semibold text-4xl mb-2'>About me</h1>
        <h2 className='text-neutral-800 text-lg'>My introduction</h2>
      </div>

      {/* Responsive Layout with padding */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 mt-14 py-4 max-w-6xl mx-auto'>
        <div className='flex justify-center'>
          <Image
            src={images}
            alt="picture"
            width={300}
            height={300}
            className='rounded-2xl' // Add shadow here if needed
          />
        </div>

        <div className='flex flex-col justify-center items-start'>
          <p className='text-zinc-900 text-2xl mb-4'>
            I love building websites that are easy to use and look great. I'm always eager to learn new technologies and improve my skills to stay updated in the world of web development.
          </p>
          <div className='flex items-center space-x-2 mt-6'>
            <a href='/Laiba k CV.pdf' target="_blank" rel="noopener noreferrer">
            <button className='bg-black hover:bg-neutral-700 text-white text-xl rounded-3xl px-8 py-4 flex items-center space-x-2'>
              Download CV
              <ArrowDownIcon className='h-5 w-6 ml-2' />
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
