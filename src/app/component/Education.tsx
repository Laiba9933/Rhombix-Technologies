import React from 'react';

const Education = () => {
  return (
    <div id="education" className="min-h-screen mt-8 p-4 md:mt-20 md-pt-[8rem]">
      <div className="text-center">
        <h1 className="text-black text-4xl font-semibold">Education</h1>
        <h2 className="text-black font-light text-lg">Academic Journey</h2>
      </div>
      
      {/* Centered text block */}
      <div className="flex items-center justify-center mt-8 px-4">
        <p className="text-justify text-xl shadow-md bg-[#e3e2e0] p-8 sm:text-lg max-w-3xl">
          I am currently pursuing a Bachelor's degree in Computer Science at 
          Mirpur University of Science and Technology. As a 3rd-semester
          student, I am building a strong foundation in various programming
          concepts and technologies, and I am eager to continue expanding my
          knowledge in the ever-evolving field of computer science. 
        </p>
      </div>

      <h1 className="text-center text-gray-800 font-serif text-2xl mb-4 mt-6">Institutes</h1>
      
      {/* Institutes Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-4xl">
        {/* University Info */}
        <div className="w-full md:w-1/2 text-right md:pr-6 mb-6 md:mb-0">
          <p className="text-zinc-800 text-xl font-serif ">Bachelor in Computer Science</p>
          <p className="text-lg text-left md:pl-40">MUST Mirpur AJK</p>
          <p className="text-lg text-left md:pl-40">2023-present</p>
        </div>

        {/* Vertical Line */}
        <div className="border-l-0 md:border-l-2 h-0 md:h-24 sm:border-l-2 border-gray-600 mb-6 md:mb-0"></div>

        {/* College Info */}
        <div className="w-full md:w-1/2 text-left md:pl-6">
          <p className="text-zinc-800 text-xl font-serif">ICS</p>
          <p className="text-lg">Gazi Ellahi Bakhash College, Mirpur</p>
          <p className="text-lg">2020-2022</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
