import React from 'react';
import Button from './Button';

function Navbar() {
    return (
        <div className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center">
                <img
                    className="h-5 text-red-100 mr-4 sm:mr-12"
                    src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                    alt="logo"
                />
                <div className="hidden md:flex gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    {["Home", "Work", "Careers", "", "News"].map((elem, index) =>
                        elem.length === 0 ? (
                            <span key={index} className="w-[2px] h-6 bg-red-600"></span>
                        ) : (
                            <a
                                key={index}
                                className="font-serif text-sm sm:text-md flex items-center gap-2 hover:text-orange-200"
                                href="#"
                            >
                                {index === 1 && (
                                    <span className="inline-block w-[5px] h-[5px] rounded-full bg-green-600"></span>
                                )}
                                {elem}
                            </a>
                        )
                    )}
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button />
                <div className="md:hidden">
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
