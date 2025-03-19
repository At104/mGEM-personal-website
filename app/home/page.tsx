"use client"
import React, { useRef, useState } from 'react';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import HeroSubSection from '../components/HeroSubSection';
import Storybook from '../components/HeroPhotos';
import { AiFillSound } from "react-icons/ai";

const Home = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
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
        <div className="mb-20 max-w-7xl py-5 mx-auto items-center justify-center px-5">
            <div className="flex mt-20 flex-col overflow-hidden leading-none">
                <ContainerScroll titleComponent={
                    <>
                        <div className="italic font-bold text-7xl md:text-9xl lg:text-9xl xl:text-[14rem] leading-tight">mGEM</div>
                        <div className="stroke font-bold reverse-italic text-7xl md:text-9xl lg:text-9xl xl:text-[14rem] leading-tight">mGEM</div>
                        <div className="italic font-bold text-7xl md:text-9xl lg:text-9xl xl:text-[14rem] leading-tight">mGEM</div>
                    </>
                }>
                    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                        <video
                            ref={videoRef}
                            className="absolute top-0 left-0 w-full h-full object-cover rounded"
                            draggable={false}
                            loop={true}
                            muted={isMuted}
                            autoPlay={true}
                        >
                            <source src="/Videos/what_is_igemf.mp4" type="video/mp4" />
                        </video>
                        <AiFillSound
                            onClick={toggleMute}
                            className="absolute top-4 right-4 cursor-pointer text-white text-2xl"
                        />
                    </div>
                </ContainerScroll>
            </div>
            <div className="py-10 m-5">
                <hr />
                <HeroSubSection />
                <hr />
            </div>
            <Storybook />
        </div>
    );
};

export default Home;