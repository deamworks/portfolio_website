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
        <section className='mt-12 pd-8' id= "about">
            {/* Heading */}
            <motion.div 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6}}
                viewport={{once:true}}
                className='text-center'>
                    <p className='text-content font-semibold inline-flex items-center gap-1 border border-gray-300 py-1.5 px-3 rounded-2xl mb-4'>
                         <PiStarFourFill className='text-lg'/> 
                         About
                       </p>
                       <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8 '> Turning creative ideas <br /> into interactive web experiences.
                       </h2>
            </motion.div>
                    {/* About data */}
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        animate="show"
                        viewport={{once:true}}
                        className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                    
                       
                        {/* Card 1 */}
                        <motion.div 
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                            <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>1+</h3>
                            <p className='text-gray-700 font-medium text-lg'>Years of hands-on experience <br />in front-end technologies</p>
                        </motion.div>
                    
                        {/* Card 2 */}
                        <motion.div 
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                            <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>5+</h3>
                            <p className='text-gray-700 font-medium text-lg'>Projects built <br />for learning and personal growth</p>
                        </motion.div> 
                        
                        {/* Card 3*/}
                        <motion.div
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                            <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>2+</h3>
                            <p className='text-gray-700 font-medium text-lg'>Certifications completed</p>
                        </motion.div>
                    </motion.div>

                    {/* Content text */}
                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.8, delay:0.2}}
                        viewport={{once:true}}
                        className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
                       
                        <div className='lg:col-span-2 space-y-6'>
                        <motion.p 
                            initial={{opacity: 0, y: -20}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.6, delay:0.3}}
                            viewport={{once:true}}
                            className='text-gray-600 text-lg leading-relaxed'>

                            "I am a third-year Computer Engineering student passionate about UX/UI Design and Front-End Development. I enjoy creating websites that are both visually appealing and easy to use. 
                            I am currently learning and practicing technologies such as HTML, CSS, JavaScript, React, Next.js, and TailwindCSS. My goal is to enhance 
                            my skills to build smooth and engaging user experiences, and to grow into a Full-Stack Developer in the future. I am eager to contribute creativity, technical skills, 
                            and a user-centered perspective to help develop projects that meet business goals and improve user satisfaction. "
                        </motion.p> 
                        <motion.p 
                            initial={{opacity: 0, y: -20}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.6, delay:0.3}}
                            viewport={{once:true}}
                            className='text-gray-600 text-lg leading-relaxed'>

                            I’m also committed to learning from real-world experiences, collaborating effectively with teams, 
                            and delivering work with dedication and a positive mindset.
                        </motion.p>

                        {/* Download button */}
                        <motion.a
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.6, delay:0.3}}
                            viewport={{once:true}}
                            href="assets/Portfolio.pdf" download className='custom-gradient py-4 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 w-max hover:opacity-90 transition-opacity duration-300'> 
                        Download CV
                        <HiDownload className='text-lg'/>
                        </motion.a>
                        </div>

                        {/* Right Column */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.5, delay:0.3}}
                            viewport={{once:true}}
                             className='lg:col-span-1 space-y-4'>
                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                whileInView={{opacity:1, y:0}}
                                transition={{duration:0.6, delay:0.3}}
                                viewport={{once:true}}
                                >
                                <p className='text-gray-500 text-sm font-medium mb-1'>Name</p>
                                <p className='text-gray-800 text-lg font-semibold'>Putita Chaleeprom</p>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                whileInView={{opacity:1, y:0}}
                                transition={{duration:0.5, delay:0.6}}
                                viewport={{once:true}} 
                                >
                                <p className='text-gray-500 text-sm font-medium mb-1'>Phone</p>
                                <p className='text-gray-800 text-lg font-semibold'>094-912-2002</p>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                whileInView={{opacity:1, y:0}}
                                transition={{duration:0.5, delay:0.7}}
                                viewport={{once:true}} 
                                >
                                <p className='text-gray-500 text-sm font-medium mb-1'>Email</p>
                                <p className='text-gray-800 text-lg font-semibold'>putita.chaleeprom12@gmail.com</p>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                whileInView={{opacity:1, y:0}}
                                transition={{duration:0.5, delay:0.8}}
                                viewport={{once:true}} 
                                >
                                <p className='text-gray-500 text-sm font-medium mb-1'>Location</p>
                                <p className='text-gray-800 text-lg font-semibold'>Bangkok, TH</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    
        </section>
    )
}