import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { announcement, featurePoints } from "@/lib/data";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <Header announcement={announcement} />
            <main className="flex-1 max-w-6xl mx-auto px-4 md:px-0 pb-10">
                <Hero featurePoints={featurePoints} />
            </main>
        </div>
    );
}
