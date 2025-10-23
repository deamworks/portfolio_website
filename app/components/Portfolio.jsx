import React from 'react';
import { PiStarFourFill } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

export const Portfolio = () => {
  // Projects array
  const projects = [
    {
      id: 1,
      title: "Application Design",
      image: "assets/portfolio-2.png",
      tags: ["Figma", "UX/UI"],
      link: "https://www.figma.com/proto/VYkPqIBAFrDH8evniWSgyx/DesireeApp?node-id=1-13&starting-point-node-id=1%3A13&t=byCP4otsdrsDCSf1-1",
    },
    {
      id: 2,
      title: "Website Design",
      image: "assets/web02.png",
      tags: ["Web Design", "UX/UI"],
      link: "https://desireeshop.netlify.app/#",
    },
    {
      id: 3,
      title: "Full Stack Blog Website",
      image: "assets/portfolio-3.png",
      tags: ["Web Design", "Full Stack"],
    },
    {
      id: 4,
      title: "Project Four",
      image: "assets/portfolio-4.png",
      tags: ["App Design", "UX/UI"],
    },
  ];

  // animation variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } },
  };

  const card = {
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="my-8" id="portfolio">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-content font-semibold inline-flex items-center gap-1 border border-gray-300 py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Portfolio
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Check out my featured <br />
          Projects
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={card}
            whileHover={{ scale: 1.03, rotateX: 3 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
          >
            {/* Project Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-[450px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black-60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>

            {/* Project Info */}
            <div className="absolute bottom-4 left-4 right-4 p-3 md:p-6 rounded-2xl bg-black/20 backdrop-blur-md border-t border-white/10">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-2 mb-3"
              >
                {project.tags.map((tagText, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20"
                  >
                    {tagText}
                  </span>
                ))}
              </motion.div>

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white transition-colors duration-300">
                  {project.title}
                </h3>

                {/* button → กดไปยังลิงก์ของโปรเจกต์ */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm 
                               border border-white/20 rounded-full text-white hover:bg-white/20 
                               transition-colors duration-300"
                  >
                    <HiArrowUpRight className="text-lg" />
                  </a>
                ) : (
                  <button
                    className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 
                               rounded-full text-white/50 cursor-not-allowed"
                    title="No link available"
                  >
                    <HiArrowUpRight className="text-lg" />
                  </button>
                )}
              </div>
            </div>

            {/* Hover glow effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-r form-purple-500/10 to-pink-500/10 pointer-events-none"
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
