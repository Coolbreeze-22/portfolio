import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <main className=" mx-2 sm:mx-5 my-5">
      <aside ref={ref}></aside>
      {inView && (
        <header className="zoom-projects custom-header text-[25px] sm:text-[35px] font-[600] text-center mb-3">
          Projects
        </header>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
        <div className="relative h-67 sm:h-73 sm:h-73 shadow-[0px_0px_8px_0px_#dad9d9] dark:shadow-[0px_0px_4px_0px_#1f2937] p-3 sm:p-5 bg-[#fcfcfc] dark:bg-inherit">
          <header className="text-[16px] sm:text-[18px] font-[600] opacity-90">
            Full-Stack Social Media App
          </header>
          <p className="text-[14px] md:text-[14px] lg:text-[16px]">
            A comprehensive social media platform designed to connect people,
            foster communities, amplify voices and bring your thoughts to life
            using posts, images, comments and likes with a seamless and engaging
            experience for users.
          </p>
          <section className="absolute bottom-0 left-0 w-[100%] flex flex-row gap-10 md:gap-20 justify-center my-8">
            <a
              href="https://postinu.vercel.app/"
              target="_blank"
              className="bg-[#490033] flex justify-center items-center text-white border-3 border-double border-white w-30 h-8 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition duration-800 ease-in-out"
            >
              View Site
            </a>
            <a
              href="https://github.com/Coolbreeze-22/elkaka-media"
              target="_blank"
              className="bg-[#490033] flex justify-center items-center text-white border-3 border-double border-white w-30 h-8 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition duration-800 ease-in-out"
            >
              Github
            </a>
          </section>
        </div>

        <div className="relative h-67 sm:h-73 shadow-[0px_0px_8px_0px_#dad9d9] dark:shadow-[0px_0px_4px_0px_#1f2937] p-3 sm:p-5 bg-[#fcfcfc] dark:bg-inherit">
          <header className="text-[16px] sm:text-[18px] font-[600] opacity-90">
            Full-Stack E-Commerce App
          </header>
          <p className="text-[14px] md:text-[14px] lg:text-[16px]">
            A Powerful online shopping platform designed to provide a seamless
            experience for customers. It enables users to browse products,
            manage orders, track deliveries in real-time, and make secure
            payments via Paystack, while offering businesses a robust platform
            to showcase products, manage inventory, and process transactions.
          </p>
          <section className="absolute bottom-0 left-0 w-[100%] flex flex flex-row gap-10 md:gap-20  justify-center my-8">
            <a
              href="https://shopinu.vercel.app/"
              target="_blank"
              className="bg-[#490033] flex justify-center items-center text-white border-3 border-double border-white w-30 h-8 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition duration-800 ease-in-out"
            >
              View Site
            </a>
            <a
              href="https://github.com/Coolbreeze-22/e-commerce"
              target="_blank"
              className="bg-[#490033] flex justify-center items-center text-white border-3 border-double border-white w-30 h-8 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition duration-800 ease-in-out"
            >
              Github
            </a>
          </section>
        </div>
        <div className="relative h-67 sm:h-73 shadow-[0px_0px_8px_0px_#dad9d9] dark:shadow-[0px_0px_4px_0px_#1f2937] p-3 sm:p-5 bg-[#fcfcfc] dark:bg-inherit">
          <header className="text-[16px] sm:text-[18px] font-[600] opacity-90">
            Video Streaming App
          </header>
          <p className="text-[14px] md:text-[14px] lg:text-[16px]">
            A User-friendly video streaming platform that brings endless
            entertainment and knowledge to your fingertips. Users can browse and
            watch movies, TV shows, music videos, educational content, and
            courses, with features like personalized recommendations and
            seamless playback, making it a one-stop destination for both fun and
            learning.
          </p>
          <section className="absolute bottom-0 left-0 w-[100%] flex flex flex-row gap-10 md:gap-20 justify-center my-8">
            <a
              href="https://showfleex.netlify.app/"
              target="_blank"
              className="bg-[#490033] flex justify-center items-center text-white border-3 border-double border-white w-30 h-8 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition duration-800 ease-in-out"
            >
              View Site
            </a>
            <a
              href="https://github.com/Coolbreeze-22/youtube-clone"
              target="_blank"
              className="bg-[#490033] flex justify-center items-center text-white border-3 border-double border-white w-30 h-8 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition duration-800 ease-in-out"
            >
              Github
            </a>
          </section>
        </div>
        <div className="relative h-67 sm:h-73 shadow-[0px_0px_8px_0px_#dad9d9] dark:shadow-[0px_0px_4px_0px_#1f2937] p-3 sm:p-5 bg-[#fcfcfc] dark:bg-inherit">
          <header className="text-[16px] sm:text-[18px] font-[600] opacity-90">
            Personal Budget Manager
          </header>
          <p className="text-[14px] md:text-[14px] lg:text-[16px]">
            A User-friendly budget tracker app that helps you take control of
            your finances. Users can track expenses, create budgets, set
            financial goals, and monitor savings, all in one place. With
            features like automated expense categorization and real-time
            updates, you'll stay on top of your money and make informed
            decisions about your financial future.
          </p>
          <section className="absolute bottom-0 left-0 w-[100%] flex flex flex-row gap-10 md:gap-20  justify-center my-8">
            <a
              href="https://trackspend.vercel.app/"
              target="_blank"
              className="bg-[#490033] flex justify-center items-center text-white border-3 border-double border-white w-30 h-8 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition duration-800 ease-in-out"
            >
              View Site
            </a>
            <a
              href="https://github.com/Coolbreeze-22/elkaka-budgettracker"
              target="_blank"
              className="bg-[#490033] flex justify-center items-center text-white border-3 border-double border-white w-30 h-8 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition duration-800 ease-in-out"
            >
              Github
            </a>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Projects;
