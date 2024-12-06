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
    
    return (
        <div className="text-white/70 pt-6">
            <div className="hidden md:flex items-center px4 py-2 mx auto max-w-[400px] bg-white">
                <ul>
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <link href={link.path}>
                                <p>{link.title}</p>
                            </link>
                        </li>
                    ))}

                    <li>
                       <a>
                        <h1>Contacter moi</h1>
                        <div className="">
                            <div></div>
                            <div></div>
                        </div>
                       </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
