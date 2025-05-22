import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <Header />
            <main className="flex-1 max-w-7xl mx-auto px-4 md:px-0">
                <Hero />
            </main>
        </div>
    );
}
