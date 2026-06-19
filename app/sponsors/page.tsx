import React from 'react';
import { SponsorIcons } from '../components/SponsorIcons';
import Link from 'next/link';
import Image from 'next/image';

const Sponsors = () => {
    return (
        <div className="site-page max-w-7xl py-10 mx-auto max-h-full px-5">
            <div className="site-page-hero text-left mt-32 mb-5">
                SPONSORS
            </div>
            <div className="min-h-[60vh] flex flex-col lg:flex-row lg:gap-0 gap-14 items-center justify-between">
                <div className="space-y-10">
                    <h2 className="text-3xl lg:text-4xl font-bold underline underline-offset-2 site-page-heading">
                        Thank you to all our sponsors that make mcmaster iGEM possible!
                    </h2>
                    <p className="md:w-96 text-lg py-2 site-page-body">
                        Interested in sponsorship or collaboration opportunities?
                        <br />
                        <br />
                        Learn more about our sponsorship package by emailing us.
                    </p>
                    <Link href="mailto:igemmcmaster@gmail.com" className="inline-block">
                        <div>
                            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:scale-110 p-1">
                                Email Us
                            </button>
                        </div>
                    </Link>
                </div>
                <div>
                    <Image src="/Sponsorship.jpg" alt="Photo" width={500} height={500} />
                </div>
            </div>
            <hr />
            <SponsorIcons />
        </div>
    );
}

export default Sponsors;