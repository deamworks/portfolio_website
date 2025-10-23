
import React from "react";
import { FaGithub, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"; 
import { motion, scale } from "framer-motion";
import { SiNotion, SiMonkeytype } from "react-icons/si";

export const Footer = () => {
    // Social media links array
    const socialIcons=[
        { icon: FaInstagram, href: "https://www.instagram.com/deam.works?igsh=MWxicDJ5eXZ0M3Nzbg%3D%3D&utm_source=qr" },
        { icon: FaGithub, href: "https://github.com/deamworks" },
        { icon: SiNotion, href: "https://www.notion.so/1b24cbcf75ed80e5826afdef8c518fa7?source=copy_link" },
        { icon: SiMonkeytype, href: "https://monkeytype.com/profile/Deamery" },
        
    ];
   const container = {
        hidden: { },
        show: {transition: { staggerChildren: 0.2, } },
        };
    const item = {
        idden: {opacity: 0 , y: 30 },
        show: {opacity: 1, y:0, transition: { duration:0.6 } }
        };

    return (
    <footer className="py-12 px-4 text-center">
        <motion.div
        variants={container}
        initial="hidden"
        whileInView="show" 
        className="flex justify-center gap-2 md:gap-6 mb-8">
            {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                    <motion.a
                        variants={item}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }} 
                        href={social.href} 
                        key={index} className="p-4 rounded-2xl border border-gray-300 hover:bg-primary/10 transition-all"
                        >
                        <IconComponent className="text-xl md-text-2xl text-primary"/>
                    </motion.a>
                );
            })}  
        </motion.div>
        <motion.p 
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.2}}
            viewport={{once:true}}
            className="text-xl md:text-2xl font-semibold text-semibold text-gradient max-w-3xl mx-auto mb-8">
            Connect with me on...
        </motion.p>
        <motion.hr
            initial={{scaleX:0}}
            whileInView={{scaleX:1}}
            transition={{duration:0.8, delay:0.4}}
            viewport={{once:true}}
         className="border-gray-300 mb-8" />

        <motion.div
            variants={container}
            initial="hidden"
            whileInView={"show"}
            className=" grid grid-cols-1 md:grid-cols-3 gap-6 text-md text-content">
            <motion.div variants={item} >
                <p className="font-semibold">Location</p>
                <p>Bangkok, TH</p>
            </motion.div>
            <motion.div variants={item}>
                <p className="font-semibold">Phone</p>
                <p>094-912-2002</p>
            </motion.div>
            <motion.div variants={item}>
                <p className="font-semibold">Email</p>
                <p>putita.chaleeprom12@gmail.com</p>
            </motion.div>
        </motion.div>
    </footer>
    );
};