"use client";

import React from "react";

const blobs = [
  { className: "cell-blob cell-blob-1 w-80 h-80 md:w-[28rem] md:h-[28rem] top-[5%] -left-[5%]", color: "rgba(78, 87, 164, 0.55)" },
  { className: "cell-blob cell-blob-2 w-64 h-64 md:w-96 md:h-96 top-[50%] -right-[5%]", color: "rgba(241, 117, 35, 0.45)" },
  { className: "cell-blob cell-blob-3 w-72 h-72 md:w-[22rem] md:h-[22rem] bottom-[8%] left-[10%]", color: "rgba(196, 0, 0, 0.35)" },
  { className: "cell-blob cell-blob-4 w-56 h-56 md:w-80 md:h-80 top-[20%] right-[20%]", color: "rgba(253, 176, 22, 0.4)" },
  { className: "cell-blob cell-blob-5 w-48 h-48 md:w-64 md:h-64 bottom-[25%] right-[25%]", color: "rgba(242, 181, 153, 0.45)" },
  { className: "cell-blob cell-blob-6 w-40 h-40 md:w-56 md:h-56 top-[65%] left-[40%]", color: "rgba(78, 87, 164, 0.4)" },
];

export default function CellBlobBackground() {
  return (
    <div className="home-page-blobs pointer-events-none" aria-hidden="true">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-2xl ${blob.className}`}
          style={{ backgroundColor: blob.color }}
        />
      ))}
      <div className="cell-blob-daughter cell-blob-daughter-1 absolute w-28 h-28 md:w-36 md:h-36 top-[16%] left-[18%] rounded-full blur-xl bg-mgem-indigo/40" />
      <div className="cell-blob-daughter cell-blob-daughter-2 absolute w-24 h-24 md:w-32 md:h-32 top-[20%] left-[26%] rounded-full blur-xl bg-mgem-orange/45" />
    </div>
  );
}
