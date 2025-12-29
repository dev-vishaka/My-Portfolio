import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactLinks = [
    "mailto:vishaka1033@gmail.com",
    "https://www.linkedin.com/in/vishaka-chaudhari/",
    "https://github.com/dev-vishaka",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="my-16 px-5 flex flex-col items-center text-center"
      id="contact"
    >
      {/* Heading */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl lg:text-4xl"
      >
        Contact <span className="font-extrabold">Me</span>
      </motion.h2>

      {/* Main Text */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 max-w-2xl"
      >
        <h2 className="font-extrabold text-3xl lg:text-5xl">
          Let's{" "}
          <span
            className="text-white"
            style={{ WebkitTextStroke: "1px black" }}
          >
            talk
          </span>{" "}
          for <br /> Something special
        </h2>

        <p className="text-[#71717A] text-sm lg:text-base mt-4">
          I enjoy building clean, user-friendly web applications and exploring
          creative solutions to real-world problems. Feel free to reach out if
          you'd like to collaborate or connect.
        </p>
      </motion.div>

      {/* Contact Details */}
      <div className="mt-6 flex flex-col items-center gap-3 font-semibold text-sm lg:text-lg">
        <motion.a
          whileHover={{ y: -2 }}
          href="mailto:vishaka1033@gmail.com"
          className="flex items-center gap-2"
        >
          <IoMdMail />
          vishaka1033@gmail.com
        </motion.a>

        <motion.a
          whileHover={{ y: -2 }}
          href="tel:7391024570"
          className="flex items-center gap-2"
        >
          <FaPhone />
          7391024570
        </motion.a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-8">
        {[BiLogoGmail, IoLogoLinkedin, BsGithub].map((Icon, index) => (
          <motion.a
            key={index}
            href={contactLinks[index]}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black p-3 rounded"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#000",
              color: "#fff",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
