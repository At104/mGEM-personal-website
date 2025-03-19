"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export const PinContainer = ({
  children,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div
        className={cn(
          "relative group z-40 cursor-pointer transform transition-transform duration-300",
          containerClassName
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 maroon rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
            />
          )}
        </AnimatePresence>
        <motion.div
          className="p-2 flex justify-start items-start rounded-lg shadow-md border border-gray-300 bg-white overflow-hidden"
          initial={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className={cn("relative z-40 bg-white p-5 rounded-lg", className)}>
            {children}
          </div>
        </motion.div>
      </div>
    </a>
  );
};
