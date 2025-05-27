import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_APP_PUBLIC_KEY
      );

      console.log("SUCCESS!", result.text);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      console.error("FAILED...", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <main className="mx-2 sm:mx-5 py-5">
      <aside ref={ref}></aside>
      {inView && (
        <header className="zoom-contact custom-header text-[25px] sm:text-[35px] font-[600] text-center mb-3">
          Contact Me
        </header>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
        <section className="shadow-[0px_0px_8px_0px_#dad9d9] dark:shadow-[0px_0px_4px_0px_#1f2937] p-3 sm:p-5 bg-[#fcfcfc] dark:bg-inherit text-center">
          <AiOutlineMail size={25} className="mx-auto mb-3" />
          <p>Email</p>
          <p className="font-san">agboking8@gmail.com</p>
          <a href="mailto:agboking8@gmail.com" className="bg-[#490033] flex justify-center items-center mt-5 mx-auto text-white border-3 border-double border-white w-30 md:w-full h-8 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition duration-800 ease-in-out">Send a message</a>
        </section>

        <section className="shadow-[0px_0px_8px_0px_#dad9d9] dark:shadow-[0px_0px_4px_0px_#1f2937] p-3 sm:p-5 bg-[#fcfcfc] dark:bg-inherit text-center">
          <FaWhatsapp size={25} className="text-green-600 mx-auto mb-3" />
          <p>Whatsapp</p>
          <p className="font-san">Chat for business</p>
          <a href="mailto:agboking8@gmail.com" target="_blank" className="bg-[#490033] flex justify-center items-center mt-5 mx-auto text-white border-3 border-double border-white w-30 md:w-full h-8 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition duration-800 ease-in-out">Send a message</a>
        </section>

        <form
          onSubmit={sendEmail}
          className="md:col-span-2 md:mx-auto md:w-[50%] lg:col-span-1 lg:w-full shadow-[0px_0px_8px_0px_#dad9d9] dark:shadow-[0px_0px_4px_0px_#1f2937] p-3 lg:p-5 bg-[#fcfcfc] dark:bg-inherit text-center space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="block border border-[#dad9d9] dark:border-b dark:border-[#1f2937] rounded-[5px] w-full h-10 lg:h-12 pl-2 text-[14px] my-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block border border-[#dad9d9] dark:border-b dark:border-[#1f2937] rounded-[5px] w-full h-10 lg:h-12 pl-2 text-[14px]"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="block border border-[#dad9d9] dark:border-b dark:border-[#1f2937] rounded-[5px] w-full h-30 pl-2 text-[14px]"
          />
          <button
            type="submit"
            className="bg-[#490033] w-[100%] text-white border-3 border-double border-white w-30 h-8 text-[13px] md:text-[16px] rounded-[5px] hover:bg-white hover:text-black hover:border-[#490033] transition duration-800 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
      <section className="flex flex-row gap-10 justify-center mt-20">
        <a
          href="https://www.linkedin.com/in/kingsley-agbo-35881b30b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="border-3 border-double border-[#dad9d9] dark:border-[#1f2937] p-2 lg:p-3 rounded-[4px]"
        >
          <FaLinkedinIn size={25} />
        </a>
        <a
          href="https://x.com/ElKaka_AG?t=G0aUqp46K4u0S4Vsx1oUgw&s=09"
          target="_blank"
          className="border-3 border-double border-[#dad9d9] dark:border-[#1f2937] p-2 lg:p-3 rounded-[4px]"
        >
          <FaXTwitter size={25} />
        </a>
        <a
          href="https://www.facebook.com/Agbo.ElKaKa.Coolbreeze/"
          target="_blank"
          className="border-3 border-double border-[#dad9d9] dark:border-[#1f2937] p-2 lg:p-3 rounded-[4px]"
        >
          <FaFacebook size={25} />
        </a>
        <a
          href="https://www.instagram.com/elkaka_ag/"
          target="_blank"
          className="border-3 border-double border-[#dad9d9] dark:border-[#1f2937] p-2 lg:p-3 rounded-[4px]"
        >
          <FaInstagram size={25} />
        </a>
      </section>
    </main>
  );
};

export default Contact;
