"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Banner } from "./banner";
import { navLinks } from "@/lib/data";
import { Announcement } from "@/utils/interfaces/announcement";
import { NavLink } from "@/utils/interfaces/nav-link";

export function Header({ announcement }: { announcement: Announcement }) {
    return (
        <header className="w-full">
            <Banner
                title={announcement.title}
                description={announcement.description}
            />

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
                        {navLinks.map((link: NavLink, index: number) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-gray-300 hover:text-aqua transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}
