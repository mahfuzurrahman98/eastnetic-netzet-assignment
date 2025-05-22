import { BannerProps } from "@/utils/interfaces/component-props";

export function Banner({ announcement }: BannerProps) {
    return (
        <div className="bg-gradient-to-r from-[#FC004E] to-[#10CBE0] w-full">
            <div className="max-w-[1124px] w-full mx-auto py-2 px-4 text-center">
                <p className="text-base md:text-[22px] font-figtree font-extrabold">
                    <span className="mr-2">🚀</span>
                    <span className="text-aqua mr-2">{`${announcement.title}:`}</span>
                    {announcement.description}
                </p>
            </div>
        </div>
    );
}
