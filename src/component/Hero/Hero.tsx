import portfolioMe from "../../assets/portfolioMe.jpg";

const Hero = () => {
  return (
    <main className="border-b border-[#dad9d9] dark:border-[#1f2937] md:mx-10">
      <header className="zoom-welcome custom-header text-[30px] md:text-[40px] font-semibold text-center">
        Welcome!
      </header>
      <div className="hero-intro sm:items-start">
        <section className="flex flex-col gap-5 md:flex-row items-center justify-around ">
          <div className="text-center basis-[50%] font-[500] mt-[20px]">
            <p className="zoom-name custom-header text-[30px] sm:text[35px] ">
              I am Kingsley
            </p>
            <p className="text-[18px] md:text-[20px] ">
              A Frontend developer with proficiency in building modern,
              scalable, High-Performing and interactive
              {/* mobile and  */} web applications
            </p>
          </div>
          <div className="basis-[40%] ">
            <img
              className=" size-60 md:size-60 lg:size-80 rounded-[170px] "
              src={portfolioMe}
              alt="loading"
            />
          </div>
        </section>
        <section className="flex flex-row gap-10 md:gap-20  justify-center my-6">
          <a
            href="https://wa.me/+2349036429879"
            target="_blank"
            className="bg-[#490033] text-white border-3 border-double border-white w-35 h-9 sm:w-40 sm:h-10 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition- duration-500 ease-in-out flex justify-center items-center"
          >
            Let's Talk
          </a>
          <a href="/KingsleyRésumé.pdf" target="_blank" rel="noopener noreferrer" className="bg-[#490033] text-white border-3 border-double border-white w-35 h-9 sm:w-40 sm:h-10 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition- duration-500 ease-in-out flex justify-center items-center">
            My Resume
          </a>
        </section>
      </div>
    </main>
  );
};

export default Hero;
