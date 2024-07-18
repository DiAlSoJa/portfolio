import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Coder",
        1500, // wait 1.5s before replacing "Coder" with "Web developer"
        "Web developer",
        1500,
        "Designer",
        1500,
        "Programmer",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#556e65] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;