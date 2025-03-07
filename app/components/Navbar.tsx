'use client';

import { useState, useEffect } from 'react';
import { NavItems } from '@/data/data';
import { FaBars, FaMixer } from 'react-icons/fa6';

const Navbar = () => {
    const [currentPath, setCurrentPath] = useState(
        typeof window !== 'undefined' ? window.location.hash || '/' : '/'
    );
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPath(window.location.hash || '/');
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className="navbar items-center px-5 justify-between gap-8 bg-base-100 absolute flex z-50 p-5 w-full md:justify-evenly shadow-md">
            {/* Logo */}
            <div className="text-white text-3xl font-extrabold tracking-wide">
                Folugboji <span className="text-yellow-500">HQ</span>
            </div>

            {/* Desktop Navigation */}
            <nav>
                <ul className="list-none hidden md:flex flex-row gap-7">
                    {NavItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.url}
                                className={`text-sm font-semibold text-gray-300 uppercase tracking-wide transition-all hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 ${
                                    item.url === currentPath &&
                                    'text-yellow-500 border-b-2 border-yellow-500 py-1'
                                }`}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex flex-1 justify-end items-center">
                    <div
                        className="cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? <FaMixer size={28} /> : <FaBars size={28} />}
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`${
                            !toggle ? 'hidden' : 'flex'
                        } p-6 bg-base-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex flex-col gap-4">
                            {NavItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.url}
                                        className={`text-sm font-medium hover:text-yellow-500 transition duration-200 ${
                                            item.url === currentPath &&
                                            'text-yellow-500 border-b-2 py-1 border-yellow-500'
                                        }`}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
