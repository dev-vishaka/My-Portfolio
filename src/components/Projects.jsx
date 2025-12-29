import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Courier Management System",
    description:
      "A PHP and MySQL based web application for managing courier bookings, tracking, and delivery records.",
    image: "/assets/project1.png",
    link: "https://github.com/dev-vishaka/courier-management-system",
  },
  {
    id: 2,
    title: "Student Feedback System",
    description:
      "A database-driven system to collect, store, and manage student feedback through an admin panel.",
    image: "/assets/project2.png",
    link: "https://github.com/dev-vishaka/student-feedback-system",
  },
  {
    id: 3,
    title: "Airline Reservation System",
    description:
      "A web-based system for flight search, booking, and passenger management using frontend technologies.",
    image: "/assets/project3.png",
    link: "https://ars-json.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div
      className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16"
      id="projects"
    >
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <a href={project.link} rel="noopener noreferrer" target="_blank">
                <img
                  className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </a>
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">
                {project.title}
              </p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-white mt-3 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
