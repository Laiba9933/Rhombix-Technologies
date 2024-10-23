// import { Bars3Icon } from '@heroicons/react/16/solid';
// import React from 'react';

// function Navbar() {
//   return (
//     <div className="flex items-center justify-between pt-7 px-24 min-h-[64px]">
//       <h1 className="text-2xl text-black">
//         LaibaKhalid
//       </h1>
//         <div className="flex gap-12">
//         <div className=" text-xl cursor-pointer ">Home</div>
//         <div className=" text-xl cursor-pointer">About</div>
//         <div className=" text-xl cursor-pointer">Projects</div>
//         <div className=" text-xl cursor-pointer">Skill</div>
//         <div className=" text-xl cursor-pointer">Contact</div>
//         <div>
//         <Bars3Icon className='md:hidden flex items-center'/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;




// "use client"
// import { useState } from 'react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; // Import the close icon as well

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle menu function
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="w-full shadow-lg">
//       <div className="flex items-center justify-between  pt-7 px-4 md:px-24 min-h-[64px]">
//         {/* Left side: Logo/Name */}
//         <h1 className="text-2xl font-bold text-black">
//           LaibaKhalid
//         </h1>

//         {/* Right side: Navigation Links (hidden on small screens) */}
//         <div className="hidden md:flex gap-8 text-xl">
//           <div  className="cursor-pointer">Home</div>
//           <div  className="cursor-pointer">About</div>
//           <div  className="cursor-pointer">Skills</div>
//           <div  className="cursor-pointer">Education</div>
//           <div  className="cursor-pointer">Contact</div>
//         </div>

//         {/* Hamburger Menu Icon (visible on small screens) */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu}>
//             {isOpen ? (
//               <XMarkIcon className="h-6 w-6 text-black" /> // Close icon when menu is open
//             ) : (
//               <Bars3Icon className="h-6 w-6 text-black" /> // Hamburger icon
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu (shown when the hamburger menu is open) */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col gap-4 px-4 py-4 bg-white w-full">
//           <div className="cursor-pointer" onClick={toggleMenu}>Home</div>
//           <div className="cursor-pointer" onClick={toggleMenu}>About</div>
//           <div className="cursor-pointer" onClick={toggleMenu}>Projects</div>
//           <div className="cursor-pointer" onClick={toggleMenu}>Skill</div>
//           <div className="cursor-pointer" onClick={toggleMenu}>Contact</div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;





"use client"
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link'; // Import Link from Next.js

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full shadow-lg">
      <div className="flex items-center justify-between pt-7 px-4 md:px-24 min-h-[64px]">
        {/* Left side: Logo/Name */}
        <h1 className="text-2xl font-bold text-black">
          LaibaKhalid
        </h1>

        {/* Right side: Navigation Links (hidden on small screens) */}
        <div className="hidden md:flex gap-8 text-xl">
          <Link href="#home" >
            <div className="cursor-pointer">Home</div>
          </Link>
          <Link href="#about" >
            <div className="cursor-pointer">About</div>
          </Link>
          <Link href="#skills" passHref>
            <div className="cursor-pointer">Skills</div>
          </Link>
          <Link href="#education" passHref>
            <div className="cursor-pointer">Education</div>
          </Link>
          <Link href="#contact" passHref>
            <div className="cursor-pointer">Contact</div>
          </Link>
        </div>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-black" /> // Close icon when menu is open
            ) : (
              <Bars3Icon className="h-6 w-6 text-black" /> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (shown when the hamburger menu is open) */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 py-4 bg-white w-full">
          <Link href="#home">
            <div className="cursor-pointer" onClick={toggleMenu}>Home</div>
          </Link>
          <Link href="#about">
            <div className="cursor-pointer" onClick={toggleMenu}>About</div>
          </Link>
          <Link href="#projects" passHref>
            <div className="cursor-pointer" onClick={toggleMenu}>Projects</div>
          </Link>
          <Link href="#skills" passHref>
            <div className="cursor-pointer" onClick={toggleMenu}>Skills</div>
          </Link>
          <Link href="#contact" passHref>
            <div className="cursor-pointer" onClick={toggleMenu}>Contact</div>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;



