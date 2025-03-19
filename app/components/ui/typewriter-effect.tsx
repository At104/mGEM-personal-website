"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split text inside of words into an array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const textRef = useRef(null);
  const [cursorHeight, setCursorHeight] = useState("1em");

  useEffect(() => {
    if (textRef.current) {
      const computedStyle = window.getComputedStyle(textRef.current);
      setCursorHeight(computedStyle.fontSize);
    }
  }, [textRef]);

  const renderWords = () => {
    return (
      <div ref={textRef}>
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn(`dark:text-white text-black`, word.className)}
              >
                {char}
              </span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2 max-w-full break-words"
        initial={{
          width: "auto",
        }}
        whileInView={{
          width: "auto",
        }}
        transition={{
          duration: 3,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="sm:text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold"
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] bg-red-800",
          cursorClassName
        )}
        style={{ height: cursorHeight }}
      ></motion.span>
    </div>
  );
};
