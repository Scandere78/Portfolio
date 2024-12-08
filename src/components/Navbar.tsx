"use client";
import Link from "next/link";
import React, {useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { title } from "process";
import path from "path";
import { div, li } from "framer-motion/client";
import { link } from "fs";

const navlinks = [
    { title: "About", path: "#about"},
    { title: "Portfolio", path: "#portfolio"},
    
];

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(!nav)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {

        }
    }
    
    return (
        <div className="text-white/70 pt-6">
            <div className="hidden md:flex items-center px4 py-2 mx auto max-w-[400px] bg-white">
                <ul className="flex flex-row p-4 space-x-8">
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <link href={link.path}>
                                <p>{link.title}</p>
                            </link>
                        </li>
                    ))}

                    <li>
                       <a href="#contact" className="group">
                        <h1 className="text-lg font-bold text-white/70 cursor-pointer">Contacter moi</h1>
                        <div className="relative">
                            <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out
                             bg-orange-400 rounded-full group-hover:w-full"></div>
                            <div className="mt-1 absolute w-2/3 h-1 transition-all duration-300 ease-out
                             bg-orange-600 rounded-full group-hover:w-full"></div>
                        </div>
                       </a>
                    </li>
                </ul>
            </div>

            <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 border rounded text-white/70 border-white/70 p-2 z-50">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}
            </div>
            
            <motion.div
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className="fixed left-0 top-8 w-full z-40 bg-black/90"
            >
                <ul className="text-4xl font-semibold my-24 text-center space-x-8">
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        
        </div>
    )
}

export default Navbar
