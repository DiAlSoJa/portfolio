import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Programador",
        1500, // wait 1.5s before replacing "Coder" with "Web developer"
        "Mexicano",
        1500, 
        "Frontend developer",
        1500,
        "Backend Developer",
        1500,
        "Full stack developer",
        1500,
      ]}
      speed={50}
      className="text-[1.5rem] md:text-[3rem]  text-slate-800 dark:text-slate-100 dar font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;