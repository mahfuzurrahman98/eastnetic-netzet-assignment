import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { announcement, featurePoints, navLinks } from "@/lib/data";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <Header announcement={announcement} navLinks={navLinks} />
            <main className="flex-1 max-w-6xl mx-auto px-4 lg:px-0 pb-10 bgamber-600">
                <Hero featurePoints={featurePoints} />
                <div className="xl:hidden"></div>
            </main>
        </div>
    );
}
