"use client";

import { Menu } from "lucide-react";
import { Banner } from "./banner";
import { NavLink } from "@/utils/interfaces/nav-link";
import { HeaderProps } from "@/utils/interfaces/component-props";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";

export function Header({ announcement, navLinks }: HeaderProps) {
    return (
        <header className="w-full">
            <Banner announcement={announcement} />

            {/* Desktop Navbar */}
            <div className="max-w-[1124px] w-full px-4 md:px-0 mx-auto hidden md:block mt-6">
                <nav className="py-6 flex items-start justify-between">
                    <div className="flex items-center">
                        <Link
                            href="#"
                            className="flex items-center cursor-pointer w-[173px] h-[74px]"
                        >
                            <Image
                                src={logo}
                                alt="Fametonic Logo"
                                width={173}
                                height={74}
                                className="w-full h-full"
                            />
                        </Link>
                    </div>

                    {/* Desktop navigation links */}
                    <div className="flex items-center space-x-8 pr-26 font-semibold text-lg">
                        {navLinks.map((link: NavLink, index: number) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-gray-400 hover:text-aqua transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="w-full md:hidden mt-2">
                <nav className="py-4 px-4 flex items-center justify-between">
                    <div className="flex-1"></div>{" "}
                    {/* Empty div for centering */}
                    {/* Centered Logo */}
                    <div className="flex-1 flex justify-center">
                        <Link
                            href="/"
                            className="flex items-center cursor-pointer w-[108px] h-[46px]"
                        >
                            <Image
                                src={logo}
                                alt="Fametonic Logo"
                                width={108}
                                height={46}
                                className="w-full h-full"
                            />
                        </Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="flex-1 flex justify-end">
                        <button className="text-white p-2">
                            <Menu size={24} />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
