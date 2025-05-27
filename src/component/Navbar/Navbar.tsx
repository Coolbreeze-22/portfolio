import type { RefObject } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { IoCallOutline } from "react-icons/io5";
import { SlBriefcase } from "react-icons/sl";

interface NavbarProps {
  heroRef: RefObject<HTMLElement | null>;
  aboutRef: RefObject<HTMLElement | null>;
  skillsRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
  contactRef: RefObject<HTMLElement | null>;
}

const Navbar = ({
  heroRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
}: NavbarProps) => {
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="pb-[90px]">
      <div className="fixed top-0 w-[100%] h-[60px] sm:h-[80px] flex flex-row justify-center items-center gap-5 sm:gap-10 border-b border-solid border-[#dad9d9] dark:border-[#1f2937] font-serif z-10 text-[12px] sm:text-[16px] bg-white dark:bg-[#030308] text-black dark:text-white cursor-pointer">
        <div onClick={() => scrollToSection(heroRef)}>
          <IoHomeOutline size={18} className="mx-auto md:hidden" />
          <p>Home</p>
        </div>
        <div onClick={() => scrollToSection(aboutRef)}>
          <IoPersonAddOutline size={18} className="mx-auto md:hidden" />
          <p>About</p>
        </div>
        <div onClick={() => scrollToSection(skillsRef)}>
          <VscTools size={18} className="mx-auto md:hidden" />
          <p>Skills</p>
        </div>
        <div onClick={() => scrollToSection(contactRef)}>
          <IoCallOutline size={18} className="mx-auto md:hidden" />
          <p>Contact</p>
        </div>
        <div onClick={() => scrollToSection(projectsRef)}>
          <SlBriefcase size={18} className="mx-auto md:hidden" />
          <p>Projects</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
