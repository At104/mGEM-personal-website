"use client"
import React, { useState } from 'react';
import { SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import { MdBiotech } from "react-icons/md";
import { cn } from "@/lib/utils"; // Ensure this utility function is correctly implemented
import WebMenu from './WebMenu';
import MobileMenu from './MobileMenu';
import Link from 'next/link'; // Updated import for Next.js Link

const Navbar: React.FC = () => {
    
    const socials = [
        {
            link: "mailto:igem@mcmaster.ca",
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
        },
        {
            link: "https://teams.igem.org/5856",
            label: "iGEM Team Page",
            Icon: MdBiotech
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
        <nav className={cn("site-nav fixed top-0 left-0 w-full py-6 flex justify-between items-center px-6 md:px-10 z-50")}>
            
            <Link href="/">
                <div>
                    {/* eslint-disable-next-line */}
                    <img src="/MGEM-Logo.png" alt="mGEM" width="50" height="50" className="drop-shadow-[0_0_8px_rgba(241,117,35,0.4)]" />
                </div>
            </Link>

            <WebMenu links={links} />
            <div className="flex justify-center w-full sm:hidden">
                <button
                    className="border border-mgem-indigo/50 bg-mgem-navy/60 backdrop-blur px-5 py-2 rounded-full text-mgem-peach hover:text-mgem-gold hover:border-mgem-orange transition-colors"
                    onClick={() => setOpen(true)}
                >
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
                            <Icon className="w-5 h-5 text-mgem-peach hover:text-mgem-gold hover:scale-125 transition-all" />
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
