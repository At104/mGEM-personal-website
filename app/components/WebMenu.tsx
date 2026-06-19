import React from 'react';
import Link from 'next/link';

interface LinkData {
    text: string;
    path: string;
}

const WebMenu = ({ links }: { links: LinkData[] }) => {
    return (
        <div className="hidden sm:flex md:flex text-mgem-peach gap-6 items-center border border-mgem-indigo/40 bg-mgem-navy/50 backdrop-blur-sm rounded-full px-5 py-3 shadow-[0_0_20px_rgba(78,87,164,0.15)]">
            {links.map(({ text, path }: LinkData, index: number) => (
                <Link
                    key={index}
                    href={path}
                    className="hover:text-mgem-gold transition-colors cursor-pointer text-sm font-medium"
                >
                    {text}
                </Link>
            ))}
        </div>
    );
}

export default WebMenu;
