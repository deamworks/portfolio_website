"use client";
import React, { useState, useRef } from 'react';
import { PiStarFourFill } from "react-icons/pi";
import { HiArrowUpRight, HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Skindex Skincare E-Commerce Platform",
      image: "/assets/48.png",
      tags: ["Full-Stack", "HTML", "CSS", "Java Script","Supabase"],
      link: "https://skindex-pied.vercel.app/",
      description: "Full-featured e-commerce platform with product catalog, cart, checkout, and order management. Includes Google OAuth, admin dashboard, Skin Quiz system, and real-time data sync via Supabase.",
    },
    {
      id: 2,
      title: "Bookself Store Web App",
      image: "/assets/52.png",
      tags: ["Full-Stack", "HTML", "CSS", "Java Script", "PostgreSQL"],
      link: "https://bookselfstore.vercel.app/",
      description: "Full-stack bookstore with product browsing, search, user authentication (Supabase + Google OAuth), shopping cart, checkout flow, and an admin dashboard for order and inventory management. Deployed on Vercel.",
    },
    {
      id: 4,
      title: "Desiree Responsive E-Commerce",
      image: "/assets/51.png",
      tags: ["Web Design", "UX/UI"],
      link: "https://desireeshop.netlify.app/#",
      description: "A fully responsive e-commerce website with modern design principles, smooth animations, and an intuitive shopping experience.",
    },
    {
      id: 3,
      title: "AI Sign Language Translation",
      image: "/assets/49.png",
      tags: ["Python", "AI/ML", "LSTM"],
      link: "https://github.com/deamworks/TwoHand_TranslateSign_V1.0.1",
      description: "Real-time hand gesture recognition system using computer vision and an LSTM-based model. Processes IMU/video input to translate sign language into text with high accuracy.",
    },
    {
      id: 5,
      title: "Blog Website",
      image: "/assets/50.png",
      tags: ["Figma", "UX/UI"],
      link: "https://www.figma.com/proto/VYkPqIBAFrDH8evniWSgyx/DesireeApp?node-id=1-13&starting-point-node-id=1%3A13&t=byCP4otsdrsDCSf1-1",
      description: "A mobile application design crafted in Figma with a focus on user experience and clean UI. Covers user flows, component systems, and interactive prototypes.",
    },
    {
      id: 6,
      title: "Application Design",
      image: "/assets/47.png",
      tags: ["HTML", "CSS", "Java Script", "SQLite3"],
      link: "https://www.figma.com/proto/VYkPqIBAFrDH8evniWSgyx/DesireeApp?node-id=1-13&starting-point-node-id=1%3A13&t=byCP4otsdrsDCSf1-1",
      description: "A mobile application design crafted in Figma with a focus on user experience and clean UI. Covers user flows, component systems, and interactive prototypes.",
    },
    {
      id: 7,
      title: "Mini Project",
      image: "/assets/53.png",
      tags: ["Javascript", "React"],
      link: "https://codepen.io/deamworks",
      description: "A series of mini front-end projects built with JavaScript and React, focused on sharpening component logic, state management, and UI patterns.",
    },
  ];


  const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, scale: 0.96, transition: { duration: 0.25 } },
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
          Check out my featured <br />Projects
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <GlassCard
            key={project.id}
            project={project}
            variants={card}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

/* ── Glassmorphism Card ── */
const GlassCard = ({ project, variants, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setTilt({
      x: ((e.clientY - cy) / (rect.height / 2)) * -8,
      y: ((e.clientX - cx) / (rect.width / 2)) * 8,
    });
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      exit={variants.exit}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      style={{ transformStyle: "preserve-3d", perspective: 900 }}
      onClick={onClick}
      className="relative rounded-3xl overflow-hidden cursor-pointer group"
    >
      {/* Glass background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-gray-200 rounded-3xl z-0 shadow-[0_4px_24px_rgba(0,0,0,0.12)]" />

      {/* Spotlight glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none z-10"
        style={{
          background: hovered
            ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(168,85,247,0.18) 0%, transparent 65%)`
            : "none",
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Image */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-56 md:h-72 object-cover"
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

      </div>

      {/* Content */}
      <div className="relative z-20 p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-gray-700 border border-white/40 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title + button row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-1">{project.title}</h3>
            {/* Description — slides in on hover */}
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
              transition={{ duration: 0.35 }}
              className="text-gray-600 text-sm leading-relaxed overflow-hidden"
            >
              {project.description}
            </motion.p>
          </div>

          {/* Arrow button */}
          {project.link && (
            <motion.a
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full custom-gradient text-white shadow-md hover:shadow-lg transition-shadow"
            >
              <HiArrowUpRight className="text-base" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Shimmer border on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: "linear-gradient(135deg, rgba(168,85,247,0.45), rgba(236,72,153,0.45), rgba(99,102,241,0.3))",
          padding: "1.5px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </motion.div>
  );
};

/* ── Modal ── */
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
    <motion.div
      initial={{ scale: 0.88, y: 40, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.88, y: 40, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      onClick={(e) => e.stopPropagation()}
      className="relative z-10 bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
    >
      <div className="relative">
        <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 bg-white/30 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center text-white hover:bg-white/50 transition-colors"
        >
          <HiXMark className="text-lg" />
        </motion.button>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="custom-gradient text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 w-max hover:opacity-90 transition-opacity text-sm"
          >
            View Project <HiArrowUpRight />
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
);