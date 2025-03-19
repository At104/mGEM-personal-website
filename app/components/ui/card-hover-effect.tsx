"use client";
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    link: string;
    icon: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    setSelectedIndex(selectedIndex === idx ? null : idx);
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10 gap-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleClick(idx)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full maroon block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.3 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            icon={item.icon}
            link={item.link}
            description={item.description}
            isSelected={selectedIndex === idx}
            isHovered={hoveredIndex === idx}
          />
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  icon,
  link,
  description,
  isHovered,
  isSelected,
}: {
  className?: string;
  icon: string;
  link: string;
  description: string;
  isHovered: boolean;
  isSelected: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-slate-300 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">
          {isSelected ? (
            <div>
              <p className="text-left text-base whitespace-pre-wrap mt-2">{description}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-maroon underline text-base">
                Learn more
              </a>
            </div>
          ) : (
            <CardDescription icon={icon} />
          )}
        </div>
      </div>
    </div>
  );
};

export const CardDescription = ({
  className,
  icon,
}: {
  className?: string;
  icon?: string;
}) => {
  return (
    <div className="flex items-center justify-center h-full mt-2">
      <img src={icon} alt="Logo" className={cn("h-52 w-52 object-contain", className)} />
    </div>
  );
};
