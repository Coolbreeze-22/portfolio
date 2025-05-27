import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swipe from "../Swipe";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <main className="font-serif tracking-[1px] sm:mx-10 my-5 border-b border-[#dad9d9] dark:border-[#1f2937]">
      <aside ref={ref}></aside>
      {inView && (
        <header className="zoom-about custom-header text-[25px] sm:text-[35px] font-[600] text-center mb-3">
          About Me
        </header>
      )}
      <Swipe />
      <p className=" mx-2 md: mx-0 mt-10 mb-5 text-[16px] sm:text-[20px]">
        I'm Kingsley, a seasoned frontend developer with a blend of experience,
        knowledge, and passion. I leverage my expertise to craft efficient,
        innovative applications that exceed expectations. With a tireless work
        ethic and unwavering dedication, I drive projects forward with precision
        and creativity. Let's collaborate to merge your vision with my skills
        and create impactful solutions that shine!
      </p>
    </main>
  );
};

export default About;
