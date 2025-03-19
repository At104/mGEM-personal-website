"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

export default function Storybook() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}




const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail:
    "/WetLab_TeamPhoto.jpg",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail:
    "/Westdale_Workshop.jpg",
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail:
    "/HP_Workshop.jpg",
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail:
    "/JamboreePhoto.png",
  },
];
