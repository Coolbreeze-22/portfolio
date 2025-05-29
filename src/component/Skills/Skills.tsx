import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <main className="font-serif tracking-[1px] sm:mx-10 my-5 border-b border-[#dad9d9] dark:border-[#1f2937]">
      <aside ref={ref}></aside>
      {inView && (
        <header className="zoom-about custom-header text-[25px] sm:text-[35px] font-[600] text-center mb-3">
          Skills
        </header>
      )}

      <section className="mt-3 grid grid-cols-1 md:grid-cols-2 md:gap-5 text-center py-5">
        <div className="text-[16px] sm:text-[18px] space-y-2">
          <p>Javascript</p>
          <p>Typescript</p>
          <p>React</p>
          <p>Html</p>
          <p>Css</p>
          <p>Tailwind</p>
          <p> Material UI</p>
        </div>

        <div className="text-[16px] sm:text-[18px] space-y-2">
          <p>Redux</p>
          <p>Zustand</p>
          <p>Recoil</p>
          <p>Nodejs</p>
          <p>MongoDB</p>
          <p>Expressjs</p>
          <p>Firebase</p>
        </div>
      </section>
    </main>
  );
};

export default Skills;
