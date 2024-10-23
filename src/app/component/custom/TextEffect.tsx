import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Frontend Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Designer',
        1500,
      ]}
      speed={50}
      className='text-center lg:text-3xl md:text-2xl sm:text-3xl mt-4  mx-40 ml-2  uppercase'
      repeat={Infinity}
    />
  );
};
 export default TextEffect



 