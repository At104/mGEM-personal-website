import React from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Button } from './ui/moving-border';
import Link from 'next/link';

const HeroSubSection = () => {
    const words = [
        { text: "synthetic", className: "text-mgem-indigo" },
        { text: "biology", className: "text-mgem-orange" },
        { text: "solutions", className: "text-mgem-gold" },
        { text: "to", className: "text-mgem-peach" },
        { text: "big problems.", className: "text-mgem-red" },
    ];

    return (
      <div className="m-4 sm:m-8 lg:m-16 lg:h-72 h-auto px-2">
        <Button
          borderClassName="bg-[radial-gradient(#F17523_40%,transparent_60%)]"
          className="bg-mgem-navy/80 border-mgem-indigo/40 text-white"
        >
          <div className="flex flex-col items-center justify-center h-fit w-full min-w-0 m-5">
            <p className="text-mgem-peach sm:text-sm md:text-lg lg:text-xl xl:text-2xl max-w-full text-center">
              We are an interdisciplinary team of students working to create
            </p>
            <TypewriterEffectSmooth
              words={words}
              className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl w-full break-words px-3"
              cursorClassName="bg-mgem-gold"
            />
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-4 mt-4">
              <Link href="/about-us">
                <button
                  className="w-32 h-10 sm:w-36 sm:h-11 rounded-xl text-white text-xs sm:text-sm font-semibold
                  bg-gradient-to-r from-mgem-red-orange via-mgem-orange to-mgem-gold
                  hover:scale-105 hover:shadow-[0_0_24px_rgba(241,117,35,0.45)] transition-all duration-300"
                >
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </Button>
      </div>
    );
}

export default HeroSubSection;
