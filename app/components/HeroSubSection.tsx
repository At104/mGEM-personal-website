import React from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Button } from './ui/moving-border';
import Link from 'next/link';

const HeroSubSection = () => {
    const words = [
        {
          text: "synthetic",
        },
        {
          text: "biology",
        },
        {
          text: "solutions",
        },
        {
          text: "to",
        },
        {
          text: "big problems.",
          className: "text-red-800 ",
        },
      ];
    return (
      <div className="m-4 sm:m-8 lg:m-16 lg:h-72 h-auto px-2 ">
        <Button>
          <div className="flex flex-col items-center justify-center h-fit w-full min-w-0 m-5">
            <p className="text-neutral-600 sm:text-sm md:text-lg lg:text-xl xl:text-2xl max-w-full">
              We are an interdisciplinary team of students working to create
            </p>
            <TypewriterEffectSmooth 
              words={words} 
              className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl w-full break-words px-3"
            />
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-4 mt-4">
              <Link href="/about-us">
                <button 
                  className="w-28 h-8 sm:w-32 sm:h-10 rounded-xl bg-black 
                  dark:border-white border-transparent text-white text-xs sm:text-sm hover:scale-110">
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
