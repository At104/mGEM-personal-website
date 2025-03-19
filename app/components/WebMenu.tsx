import React from 'react';
import Link from 'next/link';

interface LinkData {
    text: string;
    path: string;
}

const WebMenu = ({ links }: { links: LinkData[] }) => {
    return (
        <div className="hidden sm:flex md:flex text-zinc-400 gap-6 items-center shadow-md border border-zinc-300 rounded-full px-5 py-3">
            {links.map(({ text, path }: LinkData, index: number) => (
                <Link
                    key={index}
                    href={path} // Use "href" instead of "to" for Next.js's Link
                    className="hover:text-red-800 cursor-pointer"
                >
                    {text}
                </Link>
            ))}
        </div>
    );
}

export default WebMenu;
