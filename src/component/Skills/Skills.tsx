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

      <section className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-5 text-center py-5">
        <div>
          <header className="text-[16px] sm:text-[18px] font-[600] opacity-90">
            Programming Languages
          </header>
          <p className="text-[14px] sm:text-[16px]">
            Javascript
            <br />
            Typescript
          </p>
        </div>
        <div>
          <header className="text-[16px] sm:text-[18px] font-[600] opacity-90">
            Libraries and Frameworks
          </header>
          <p className="text-[14px] sm:text-[16px]">
            React
            <br />
            React-Native
          </p>
        </div>
        <div>
          <header className="text-[16px] sm:text-[18px] font-[600] opacity-90">
            Styling and UI
          </header>
          <p className="text-[14px] sm:text-[16px]">
            Html
            <br />
            Css
            <br />
            Tailwind
            <br />
            Material UI
          </p>
        </div>
        <div>
          <header className="text-[16px] sm:text-[18px] font-[600] opacity-90">
            State Management
          </header>
          <p className="text-[14px] sm:text-[16px]">
            Redux
            <br />
            Zustand
            <br />
            Recoil
          </p>
        </div>
        <div>
          <header className="text-[16px] sm:text-[18px] font-[600] opacity-90">
            Backend Knowledge
          </header>
          <p className="text-[14px] sm:text-[16px]">
            Nodejs
            <br />
            MongoDB
            <br />
            Expressjs
            <br />
            Firebase
          </p>
        </div>
      </section>
    </main>
  );
};

export default Skills;
