"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="w-full">
            <div className="bg-gradient-to-r from-[#FC004E] to-[#10CBE0] w-full">
                {/* Banner announcement */}
                <div className="max-w-7xl w-full mx-auto py-2 px-4 text-center">
                    <p className="text-base md:text-[22px] font-figtree font-extrabold">
                        <span className="mr-2">🎉</span>
                        <span className="text-aqua mr-2">
                            FRESH BEGINNINGS SALE:
                        </span>
                        {/* <span className="text-white"> */}
                        Extra 25% OFF, Limited Spots - start your journey today!
                        {/* </span> */}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl w-full px-4 md:px-0 mx-auto">
                {/* Navigation */}
                <nav className="py-4 md:py-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center cursor-pointer w-[108px] h-[46px] md:w-[173px] md:h-[74px]">
                            <Image
                                src="/images/logo.svg"
                                alt="Fametonic Logo"
                                width={108}
                                height={46}
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-white p-2">
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center space-x-8 pr-8 font-semibold text-lg">
                        <Link
                            href="#"
                            className="text-gray-300 hover:text-aqua transition-colors"
                        >
                            About us
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-300 hover:text-aqua transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
