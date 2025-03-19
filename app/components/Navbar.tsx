"use client"
import React, { useState } from 'react';
import { SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import { cn } from "@/lib/utils"; // Ensure this utility function is correctly implemented
import WebMenu from './WebMenu';
import MobileMenu from './MobileMenu';
import Link from 'next/link'; // Updated import for Next.js Link

const Navbar: React.FC = () => {
    
    const socials = [
        {
            link: "mailto:igemmcmaster@gmail.com",
            label: "Gmail", 
            Icon: SiGmail
        },
        {
            link: "https://www.instagram.com/igemmcmaster/?hl=en",
            label: "Instagram",
            Icon: SiInstagram
        },
        {
            link: "https://www.linkedin.com/company/igem-mcmaster/",
            label: "Linkedin",
            Icon: SiLinkedin
        }
    ];


    const links = [
        {
            text: "About Us",
            path: "/about-us"
        },
        {
            text: "Our Team",
            path: "/our-team" 
        },
        {
            text: "Projects",
            path: "/projects"
        },
        {
            text: "Get Involved",
            path: "/get-involved" 
        },
        {
            text: "Sponsors",
            path: "/sponsors"            
        },
    ];

    const [open, setOpen] = useState(false);

    return (
        <nav className={cn("bg-white fixed top-0 left-0 w-full py-10 flex justify-between items-center animate-move-down px-10 z-50")}>
            
            <Link href="/">
                <div>
                    {/* eslint-disable-next-line */}
                    <img src="/MGEM-Logo.png" alt="mGEM" width="50" height="50" />
                </div>
            </Link>

            <WebMenu links={links} />
            <div className="flex justify-center w-full sm:hidden">
                <button className="shadow-md px-5 py-2 rounded-full text-zinc-500" onClick={() => setOpen(true)}>
                    Menu
                </button>
            </div>
            {open && (
                <MobileMenu
                    links={links}
                    close={() => setOpen(false)}
                />
            )}
            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const Icon = social.Icon;
                    return (
                        <a href={social.link} key={index} aria-label={social.label} target="_blank" rel="noopener noreferrer" >
                            <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
