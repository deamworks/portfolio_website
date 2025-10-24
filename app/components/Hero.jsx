
import React from 'react'
import Image from 'next/image'
import { easeOut, motion } from 'framer-motion'
import { HiOutlineViewGridAdd ,HiDownload } from "react-icons/hi";


export const Hero = () => {

  //Icon array
  const icons = [
    "assets/github.svg",
    "assets/nextjs.svg",
    "assets/notion.svg",
    "assets/react.svg",
    "assets/figma.svg",
    "assets/html.svg",
    "assets/css.svg",
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, transition: { staggerChildren: 0.1, } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {opacity: 1, y: 0, transition: { duration:0.6,ease:"easeOut" } },
  };
  return (
    
    <section className="my-12 pb-8" id='home'>

        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-4 md:px-0 pb-8 overflow">
        {/* Profile Image */}
          <motion.div variants={item}>
          <Image src="/assets/pro02.png"
          width={150} 
          height={150} 
          className="rounded-full mb-4"
          priority alt ="Profile Image"/>
        </motion.div>

        {/* Name */}
        <motion.h3
          variants={item}
          className="text-lg md;text-xl font-semibold flex items-center jsutify-center gap-2 m">
          I'm Putita Chaleeprom <span className='inline-block'>🌸</span>
        </motion.h3>
        
        {/* Title */}
        <motion.h1 
        variants={item}
        className='text-3xl md:text-5xl font-semibold mt-2 leading-tight'>
          front-end developer <br className='md:midden'/>& UX/UI designer.
        </motion.h1>
        
        {/* Icons swipe */}
        <motion.div 
        variants={item}
        className='relative my-6 md:my-8 w-full mask-r-from-50% mask-lfrom-50% overflow-hidden'>
          
          <motion.div 
            className='flex gap-4 w-max'
            animate={{ x: ["0%", "-50%"] }}
            transition={{repeat: Infinity, 
              repeatType: "loop", 
              duration: 15, 
              ease: "linear",}}>
          {/* Icons Loop */}
          {icons.concat(icons).map((icon, index) => (
            <Image 
              key={index} 
              src={icon} 
              alt = {`Icon ${index + 1}`}
              width={40} 
              height={40} 
              className='md:w-[50px] md:h-[50px]' />
          ))}
          </motion.div>
        </motion.div>
        {/* Buttons */}
        <motion.div
        variants={item} 
        className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
            <a 
              href="#portfolio" 
              className='custom-gradient w-full md:w-auto py-3 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300'>
               <HiOutlineViewGridAdd className='text-lg'/>My Work  
            </a>
            <a 
              href="assets/resume.pdf" download className='w-full md:w-auto py-3 px-8 rounded-full font-semibold border border-content/20 hover:border-content/40 hover:shadow-sm transition-colors duration-300 flex items-center justify-center gap-2'>
               <HiDownload className='text-lg' />My Resume</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

