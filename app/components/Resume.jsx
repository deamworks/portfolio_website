import React from 'react'
import { PiStarFourFill,PiGraduationCapFill } from "react-icons/pi";
import { motion } from 'framer-motion';
export const Resume = () => {
    // Education array
    const educationData = [
        {
        year: "2023 - Present",
        title: "Faculty of Engineering",
        institution:"Rangsit University",
        description:"Studying computer engineering, focusing on programming, software design, and UX/UI design for user-centered web development",
        },
        {
        year: "1019 - 2022",
        title: "Science - Mathematices Program",
        institution:"Sriayudhya School",
        description:"Studied science and mathematics with a focus on analytical thinking.",
        },
        {
        year: "2016-2019",
        title: "Japanese Language Program",
        institution:"Sriayudhya School",
        description:"Studied Japanese language, culture, and communication skills.",
        },
    ];
    
    const container = {
        hidden: { },
        show: {transition: { staggerChildren: 0.2, } },
        };
    const item = {
        idden: {opacity: 0 , y: 30 },
        show: {opacity: 1, y:0, transition: { duration:0.6 } }
        };

    // work data array
    const workData = [
        {
        year: "2025",
        title: "Responsive Web Design Developer Certification",
        institution:"freeCodeCamp.org",
        description:"Learned to build responsive, accessible, and visually appealing web layouts using HTML and CSS.",
        },
        {
        year: "2025",
        title: "Front End Development Libraries Certification ",
        institution:"freeCodeCamp.org",
        description:"racticed building interactive web interfaces using frameworks.",
        },
        // {
        // year: "2024",
        // title: "",
        // institution:"",
        // description:"",
        // },
    ]
  return (
    <section className='mt-12 pb-8' id="resume">
         {/* Heading */}
            <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6}}
                viewport={{once:true}} 
                className='text-center'>

                <p className='text-content font-semibold inline-flex items-center gap-1 border border-gray-300 py-1.5 px-3 rounded-2xl mb-4'>
                     <PiStarFourFill className='text-lg'/> 
                     Resume
                   </p>
                   <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8 '>
                    Education and Certifications <br />
                   </h2>
            </motion.div>
                {/* Timeline Content */}
                <div className='grid grid-cols-2 md:grid-cols-2 gap-4 space-y-12'>
                    {/* Education */}
                    <motion.div
                     initial={{opacity:0, y:40}}
                     whileInView={{opacity:1, y:0}}
                     transition={{duration:0.8}}
                     viewport={{once:true}}>
                        <h3 className='text-xl md:text-2xl font-bold text-content mb-8'>My Education</h3>
                        <div className='relative'>
                            <div className='absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60'></div>
                            <div>
                                {educationData.map((item,index) =>(
                                    <motion.div 
                                    className='relative flex items-start space-x6 pb-8'
                                    key={index}
                                    variants={item}
                                    whileHover={{ x: 10 }}>
                                        <div className='relative flex-shrink-0'>
                                            <div className='w-8 h-8 custom-gradient rounded-full flex items-center justify-center'> 
                                                <PiGraduationCapFill className='w-4 h-4 text-white'/>                      
                                            </div>
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                            <div className='flex item-center space-x-2 mb-2'>
                                                <span className='text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded'> {item.year}</span>
                                            </div>
                                            <h4 className='text-lg font-semibold text-content'>{item.title}</h4>
                                            <p className='text-gray-600 mb-2'>{item.institution}</p>
                                            <p className='text-gray-700 text-sm'>{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                     {/* work */}
                    <motion.div
                     initial={{opacity:0, y:20}}
                     whileInView={{opacity:1, y:0}}
                     transition={{duration:0.6}}
                     viewport={{once:true}}>
                        <h3 className='text-xl md:text-2xl font-bold text-content mb-8'>My Certifications</h3>
                        <div className='relative'>
                            <div className='absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60'></div>
                            <div>
                                {workData.map((item,index) =>(
                                    <motion.div 
                                    className='relative flex items-start space-x6 pb-8'
                                    key={index}
                                    variants={item}
                                    whileHover={{ x: 10 }}>
                                        <div className='relative flex-shrink-0'>
                                            <div className='w-8 h-8 custom-gradient rounded-full flex items-center justify-center'> 
                                                <PiGraduationCapFill className='w-4 h-4 text-white'/>                      
                                            </div>
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                            <div className='flex item-center space-x-2 mb-2'>
                                                <span className='text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded'> {item.year}</span>
                                            </div>
                                            <h4 className='text-lg font-semibold text-content'>{item.title}</h4>
                                            <p className='text-gray-600 mb-2'>{item.institution}</p>
                                            <p className='text-gray-700 text-sm'>{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
    </section>
  )
}
 
