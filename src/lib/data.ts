import { Announcement } from "@/utils/interfaces/announcement";
import { NavLink } from "@/utils/interfaces/nav-link";

// Navigation links
export const navLinks: NavLink[] = [
    {
        title: "About us",
        href: "#",
    },
    {
        title: "Contact",
        href: "#",
    },
];

// Banner announcement data, think of it as the data coming from the API
export const announcement: Announcement = {
    title: "FRESH BEGINNINGS SALE",
    description: "Extra 25% OFF, Limited Spots - start your journey today!",
};

// Feature points data
export const featurePoints: string[] = [
    "Start growing your influence right away—no waiting required!",
    "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "Use a Personal AI Worker to boost your content",
    "Learn from expert-led courses designed for aspiring influencers",
];
