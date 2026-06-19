/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SubteamCarousel from "../components/SubteamCarousel";
const AboutUs = () => {
  return (
    <div className="site-page max-w-7xl py-10 mx-auto max-h-full px-5">
      <div className="site-page-hero text-left mt-32 mb-5">ABOUT US</div>

      <section className="about-mission mt-12 xl:mt-20 relative z-20">
        <h2 className="about-mission-heading text-center font-extrabold tracking-wide">
          Our Mission
        </h2>
        <div className="about-mission-box-wrap rounded-lg mt-8">
          <div className="about-mission-box rounded-[calc(0.5rem-3px)] py-12 xl:py-16 px-6 md:px-12">
            <p className="about-mission-text mx-auto max-w-4xl text-center text-lg md:text-xl lg:text-2xl font-bold leading-relaxed">
            A highly accomplished international synthetic biology competition aimed
            towards mostly undergraduates, with the involvement of graduates,
            professors, and various stakeholders. Interdisciplinary teams
            specializing in Wet Lab, Dry Lab, and Human Practices collaborate to
            create novel synthetic biology oriented projects that can be applied
            in the real world!
          </p>
          </div>
        </div>
      </section>
      <section className="stats mt-[50px] xl:mt-[100px] relative z-20 maroon py-[50px] xl:py-[100px] text-white rounded-lg">
        <div className="container mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stats__item text-center md:border-l-0 border-white">
              <div className="inline-block">
                <h1 className="text-5xl font-bold mb-4">Gold</h1>
                <p className="text-xl">Medalist 2025 Undergrad Category</p>
              </div>
            </div>
            <div className="stats__item text-center border-white md:border-l md:border-r-0">
              <div className="inline-block">
                <h1 className="text-5xl font-bold mb-4">10+</h1>
                <p className="text-xl">Years Established</p>
              </div>
            </div>
            <div className="stats__item text-center md:border-l md:border-r-0 border-white">
              <div className="inline-block">
                <h1 className="text-5xl font-bold mb-4">30+</h1>
                <p className="text-xl">Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubteamCarousel />
    </div>
  );
};

export default AboutUs;
