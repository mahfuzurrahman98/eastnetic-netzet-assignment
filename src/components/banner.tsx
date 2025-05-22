type BannerProps = {
    title: string;
    description: string;
};

export function Banner({ title, description }: BannerProps) {
    return (
        <div className="bg-gradient-to-r from-[#FC004E] to-[#10CBE0] w-full">
            <div className="max-w-6xl w-full mx-auto py-2 px-4 text-center">
                <p className="text-base md:text-[22px] font-figtree font-extrabold">
                    <span className="mr-2">🎉</span>
                    <span className="text-aqua mr-2">{`${title}:`}</span>
                    {description}
                </p>
            </div>
        </div>
    );
}
