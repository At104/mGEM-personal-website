"use client"
import React, { useRef, useState } from 'react';
import HeroSubSection from '../components/HeroSubSection';
import Storybook from '../components/HeroPhotos';
import PetriDishHero from '../components/PetriDishHero';
import { AiFillSound } from "react-icons/ai";

const Home = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoSectionRef = useRef<HTMLDivElement>(null);
    const videoCardRef = useRef<HTMLDivElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
            if (!isMuted) {
                videoRef.current.play().catch(error => {
                    console.log('Error trying to play video:', error);
                });
            }
        }
    };

    return (
        <div className="pb-20 max-w-7xl py-5 mx-auto items-center justify-center px-5">
            <PetriDishHero
                videoSectionRef={videoSectionRef}
                videoCardRef={videoCardRef}
            />

            <div
                ref={videoSectionRef}
                className="relative w-full max-w-5xl mx-auto -mt-[12vh] z-10"
            >
                <div
                    ref={videoCardRef}
                    className="p-[3px] home-glow-card rounded-[30px] shadow-[0_0_60px_rgba(78,87,164,0.35)]"
                >
                    <div className="overflow-hidden rounded-[27px] bg-mgem-navy p-2 md:p-4">
                        <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
                            <video
                                ref={videoRef}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                draggable={false}
                                loop={true}
                                muted={isMuted}
                                autoPlay={true}
                            >
                                <source src="/Videos/what_is_igemf.mp4" type="video/mp4" />
                            </video>
                            <AiFillSound
                                onClick={toggleMute}
                                className="absolute top-4 right-4 cursor-pointer text-mgem-gold text-2xl hover:text-mgem-orange transition-colors drop-shadow-lg pointer-events-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10 m-5">
                <hr className="home-section-divider" />
                <HeroSubSection />
                <hr className="home-section-divider" />
            </div>

            <div className="px-5 mb-8">
                <p className="text-mgem-indigo text-xs uppercase tracking-[0.3em] font-semibold mb-2">In the lab &amp; beyond</p>
                <h2 className="text-3xl md:text-5xl font-bold home-gradient-text-cool">Building biology, one project at a time</h2>
            </div>

            <Storybook />
        </div>
    );
};

export default Home;
