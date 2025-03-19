import React, { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Link from 'next/link';

interface LinkData {
    text: string;
    path: string;
}

interface MobileMenuProps {
    links: LinkData[];
    close: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, close }) => {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
        const handleResize = (e: UIEvent) => {
            if ((e.target as Window).innerWidth >= 640) {
                close();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [close]);

    return (
        <div>
            <div className="fixed inset-0 top-0 w-full h-screen backdrop-blur-sm bg-gray-500 bg-opacity-60 sm:hidden"></div>
            <div className="fixed inset-0 top-0 w-full p-5">
                <div className={`w-full bg-white rounded-xl p-5 transition-all ${animation ? "scale-100" : "scale-95"}`}>
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="text-xl font-bold font-italic">Navigation</h1>
                        <IoCloseOutline className="w-7 h-7 hover:scale-110 transition-all cursor-pointer" onClick={close} />
                    </div>
                    <div className="mt-5 divide-y">
                        {links.map(({ text, path }: LinkData, index: number) => (
                            <Link
                                key={index}
                                href={path}
                                className="block py-2 text-zinc-500"
                            >
                                {text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
