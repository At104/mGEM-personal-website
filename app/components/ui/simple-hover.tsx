"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const SimpleHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative",
        className
      )}
    >
      <div className="relative h-full w-full">
        <motion.div 
          className={cn(
            "absolute inset-0 w-full h-full bg-black/40 z-10 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )} 
        />
        <div className="h-full w-full relative bg-gray-50 dark:bg-black">
          <Image
            src={imageUrl}
            alt="image"
            className={cn(
              "h-full w-full object-cover",
              imageClassName
            )}
            width={400}
            height={400}
            loading="lazy"
            quality={75}
            priority={false}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "text-white absolute bottom-4 left-4 z-40",
            childrenClassName
          )}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}; 