import React from 'react'
import { HiDownload } from 'react-icons/hi';
import { PiStarFourFill } from "react-icons/pi";
import { motion } from 'framer-motion';


export const About = () =>{
    const container = {
        hidden: { },
        show: {transition: { staggerChildren: 0.2, } },
        };

    const item = {
        hidden: {opacity: 0 , y: 30 },
        show: {
            opacity: 1, 
            y:0, 
            transition: { duration:0.6 } }
        };

    return(
        <section className='mt-12 pb-8' id="about">
            {/* Heading */}
            <motion.div 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6}}
                viewport={{once:true}}
                className='text-center mb-10'>
                    <p className='text-content font-semibold inline-flex items-center gap-1 border border-gray-300 py-1.5 px-3 rounded-2xl mb-4'>
                         <PiStarFourFill className='text-lg'/> 
                         About
                    </p>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2'>
                        Building full-stack solutions <br /> with clean code & great UX.
                    </h2>
            </motion.div>

            {/* Stats Cards */}
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                
                <motion.div 
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-gray-200 shadow-sm'>
                    <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>1+</h3>
                    <p className='text-gray-700 font-medium text-lg'>Years of hands-on experience <br />in software development</p>
                </motion.div>
            
                <motion.div 
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-gray-200 shadow-sm'>
                    <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>5+</h3>
                    <p className='text-gray-700 font-medium text-lg'>Full-stack & UI projects <br />built end-to-end</p>
                </motion.div> 
                
                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-gray-200 shadow-sm'>
                    <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>2+</h3>
                    <p className='text-gray-700 font-medium text-lg'>Certifications completed <br />in web development</p>
                </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.2}}
                viewport={{once:true}}
                className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
               
                {/* Left — Bio */}
                <div className='lg:col-span-2 space-y-5'>
                    <motion.p 
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.6, delay:0.3}}
                        viewport={{once:true}}
                        className='text-gray-600 text-lg leading-relaxed'>
                        I'm a third-year Computer Engineering student with hands-on experience in 
                        <span className='font-semibold text-gray-800'> full-stack web development</span> through academic and personal projects. 
                        I enjoy building things from scratch — from designing UI to connecting back-end logic and databases.
                    </motion.p> 

                    <motion.p 
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.6, delay:0.4}}
                        viewport={{once:true}}
                        className='text-gray-600 text-lg leading-relaxed'>
                        I have practical experience with <span className='font-semibold text-gray-800'>HTML, CSS, JavaScript, React, Next.js, TailwindCSS, Node.js, and Supabase</span>. 
                        I'm a fast learner who enjoys solving real problems, writing clean code, and continuously improving through every project I work on.
                    </motion.p>

                    <motion.p
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.6, delay:0.5}}
                        viewport={{once:true}}
                        className='text-gray-600 text-lg leading-relaxed'>
                        I'm currently seeking a <span className='font-semibold text-gray-800'>Software Engineer internship</span> where I can contribute, 
                        learn from experienced teams, and grow into a well-rounded developer in a real-world environment.
                    </motion.p>

                    {/* Download button */}
                    <motion.a
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.6, delay:0.5}}
                        viewport={{once:true}}
                        href="/assets/Resume Putita Chaleeprom (6).pdf" 
                        download 
                        className='custom-gradient py-4 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 w-max hover:opacity-90 transition-opacity duration-300'> 
                        Download CV
                        <HiDownload className='text-lg'/>
                    </motion.a>
                </div>

                {/* Right — Info */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.5, delay:0.3}}
                    viewport={{once:true}}
                    className='lg:col-span-1 space-y-5 bg-white/40 backdrop-blur-sm border border-gray-200 rounded-3xl p-6 shadow-sm'>
                    
                    {[
                        { label: "Name", value: "Putita Chaleeprom" },
                        { label: "Role", value: "Software Engineer / Full-Stack" },
                        { label: "Phone", value: "094-912-2002" },
                        { label: "Email", value: "putita.chaleeprom12@gmail.com" },
                        { label: "Location", value: "Bangkok, TH" },
                        { label: "Status", value: "Open to opportunities 🌸" },
                    ].map((info, i) => (
                        <motion.div
                            key={i}
                            initial={{opacity: 0, x: 10}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration:0.4, delay: 0.3 + i * 0.1}}
                            viewport={{once:true}}>
                            <p className='text-gray-400 text-xs font-semibold uppercase tracking-wider mb-0.5'>{info.label}</p>
                            <p className='text-gray-800 text-base font-semibold'>{info.value}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
                    
        </section>
    )
}