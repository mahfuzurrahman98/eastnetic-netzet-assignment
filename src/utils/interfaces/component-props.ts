import { NavLink } from "@/utils/interfaces/nav-link";
import { Announcement } from "@/utils/interfaces/announcement";

export interface HeaderProps {
    announcement: Announcement;
    navLinks: NavLink[];
}

export interface BannerProps {
    announcement: Announcement;
}

export interface HeroProps {
    featurePoints: string[];
}
