"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Title from "./Subtitle";

const SUBTEAMS = [
  {
    title: "Wet Lab",
    image: "/WLgroup.PNG",
    description:
      "Wet lab is a subcommittee of the iGEM team that is responsible for developing biological background for the project. This team is responsible for completing background literature reviews for the project to provide a rationale and proof of concept. The team is also responsible for developing and designing synthetic biological systems that will be designed on Benchling and built and tested in the lab. During the spring and summer term the wet lab team will work in the lab to make the project into reality, generating data that will be used to validate the project design.",
  },
  {
    title: "Dry Lab",
    image: "/DL.jpg",
    description:
      "Dry Lab is a subcommittee of the McMaster-Canada iGEM team that is responsible for developing mathematical models to analyze data collected by the Wet Lab team, creating kinetic and related models to validate the system design, and designing hardware components (i.e. the physical structure of the final system). The DL team will also utilize a variety of software including SimBiology, Python, and Benchling, and hardware components. Although experience in these programs is great, it is not required in order to apply. Above all, DL values members that are dedicated and eager to learn.",
  },
  {
    title: "Human Practices",
    image: "/HP.jpg",
    description:
      "The Human Practices Subcommittee explores the real-world application of our project and its social, economic, and environmental implications. We actively reflect on the impact our project will have on the world and how the world — different perspectives, views, and considerations — impacts our project. As the goal of our iGEM team is to tackle global challenges by using synthetic biology to solve problems, HP strives to ensure this work is reflective, responsive, and responsible.",
  },
  {
    title: "Media (Design & Social Media)",
    image: "/Media.jpg",
    description:
      "The Media Subcommittee is composed of the creatives of the team that focuses on building iGEM's brand and creating the visuals to help communicate our project to the general public and at the iGEM jamboree competition. Our Design members are responsible for creating and managing the brand for iGEM and managing major projects and deliveries. Our social media are pivotal with increasing our outreach within our community and improving our communication with members.",
  },
  {
    title: "Admin (Project Management, Finance & Web Dev)",
    image: "/Sponsorship.jpg",
    paragraphs: [
      "The Project Management Admin Team ensures seamless operation and coordination across all teams. The team's primary focus is on organizing and managing the workflow, creating and scheduling workshops, and overseeing task management. They develop and maintain comprehensive project plans to align all team activities and monitor project timelines and milestones, providing updates and adjustments as needed. Additionally, they design and organize workshops tailored to the needs of our teams, coordinating logistics. Their goal is to enhance productivity, allowing our teams to focus on their core responsibilities and achieve their goals effectively.",
      "The Finance Team is dedicated to securing the necessary funding and sponsorships to enable our team's participation in the iGEM Jamboree in Paris. This team focuses on identifying potential funding sources, developing sponsorship proposals, and building relationships with sponsors and donors. Our responsibilities include budget planning, financial tracking, and ensuring that our team has the resources needed to successfully complete our project. The Finance Team plays a critical role in ensuring that our team can achieve its goals by effectively managing financial resources and securing the support of key stakeholders.",
      "Our Web Dev members will be in charge of the development of mGEM's personal website and the team's wiki for the competition to document all of our findings in a clear and visually appealing way.",
    ],
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 48 : -48,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
  }),
};

export default function SubteamCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const current = SUBTEAMS[index];

  const paginate = useCallback((newDirection: number) => {
    setIndex(([prev]) => {
      const next = (prev + newDirection + SUBTEAMS.length) % SUBTEAMS.length;
      return [next, newDirection];
    });
  }, []);

  return (
    <section className="mt-16 mb-10">
      <Title text="Our Subteams" className="mb-5" />
      <hr />

      <div className="mx-auto mt-10 max-w-4xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="site-page-section-title mb-8 text-2xl md:text-3xl">
              {current.title}
            </h2>

            <div className="relative flex w-full items-center justify-center gap-3 md:gap-6">
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous subteam"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-mgem-gold/50 bg-mgem-indigo/30 text-white transition hover:scale-105 hover:border-mgem-gold hover:bg-mgem-indigo/50"
              >
                <IoChevronBack className="text-2xl" />
              </button>

              <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border-2 border-mgem-indigo/50 shadow-[0_0_40px_rgba(78,87,164,0.35)]">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 576px"
                  priority={index === 0}
                />
              </div>

              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next subteam"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-mgem-gold/50 bg-mgem-indigo/30 text-white transition hover:scale-105 hover:border-mgem-gold hover:bg-mgem-indigo/50"
              >
                <IoChevronForward className="text-2xl" />
              </button>
            </div>

            <div className="mt-8 max-w-3xl space-y-4 text-justify">
              {"paragraphs" in current && current.paragraphs ? (
                current.paragraphs.map((paragraph, i) => (
                  <p key={i} className="site-page-body text-lg text-justify">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="site-page-body text-lg text-justify">{current.description}</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {SUBTEAMS.map((team, i) => (
            <button
              key={team.title}
              type="button"
              onClick={() =>
                setIndex([i, i > index ? 1 : i < index ? -1 : 0])
              }
              aria-label={`View ${team.title}`}
              aria-current={i === index ? "true" : undefined}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
                i === index
                  ? "bg-mgem-gold text-mgem-navy"
                  : "bg-mgem-indigo/30 text-white/80 hover:bg-mgem-indigo/50"
              }`}
            >
              {team.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
