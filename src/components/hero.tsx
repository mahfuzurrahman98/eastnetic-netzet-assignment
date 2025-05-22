import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between md:items-start">
                {/* Left content column */}
                <div className="w-full order-2 md:order-1">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight font-urbanist mb-2">
                        Want to Turn Social Media Into a Profitable Career?
                    </h2>

                    <h3
                        className="text-xl md:text-4xl font-bold text-aqua font-urbanist mb-3"
                        style={{
                            textShadow: "0 4px 8px var(--color-folly)",
                        }}
                    >
                        Discover your way to success with Fametonic:
                    </h3>

                    {/* Feature Points */}
                    <div className="space-y-4 mb-5">
                        <div className="flex items-start">
                            <span className="text-amaranth-500 text-lg mr-3">
                                ✨
                            </span>
                            <p className="text-white">
                                Start growing your influence right away—no
                                waiting required!
                            </p>
                        </div>

                        <div className="flex items-start">
                            <span className="text-amaranth-500 text-lg mr-3">
                                ✨
                            </span>
                            <p className="text-white">
                                Create viral TikToks and Reels step by step with
                                easy-to-follow lessons
                            </p>
                        </div>

                        <div className="flex items-start">
                            <span className="text-amaranth-500 text-lg mr-3">
                                ✨
                            </span>
                            <p className="text-white">
                                Use a Personal AI Worker to boost your content
                            </p>
                        </div>

                        <div className="flex items-start">
                            <span className="text-amaranth-500 text-lg mr-3">
                                ✨
                            </span>
                            <p className="text-white">
                                Learn from expert-led courses designed for
                                aspiring influencers
                            </p>
                        </div>
                    </div>

                    {/* CTA Button with Terms */}
                    <div className="flex flex-col gap-y-10 mt-6">
                        <div className="order-2 md:order-1 max-w-[350px] md:max-w-[313px] w-full">
                            <a
                                href="#"
                                className="inline-flex justify-center items-center w-full bg-amaranth-600 text-white text-xl font-bold py-3 rounded-lg transition-all duration-300"
                                style={{
                                    boxShadow:
                                        "0 0 15px var(--color-turquoise-blue-400)",
                                }}
                                aria-label="Get started with Fametonic"
                            >
                                <span className="flex items-center justify-center">
                                    GET STARTED
                                    <ArrowRight className="ml-2" size={20} />
                                </span>
                            </a>
                            <p className="text-xs text-center text-gray-400 mt-2">
                                1-minute quiz for personalized Insights
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="order-1 md:order-2 text-center md:text-left text-gray-400">
                            <p className="text-xs">
                                By clicking "Get Started", you agree with{" "}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:underline"
                                >
                                    Terms and Conditions
                                </a>
                                ,{" "}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:underline"
                                >
                                    Privacy Policy
                                </a>
                                ,{" "}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:underline"
                                >
                                    Subscription Terms
                                </a>
                            </p>

                            <p className="text-xs mt-4">
                                Fametonic 2025 ©All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right image column */}
                <div className="w-full order-1 md:order-2">
                    <Image
                        src="/images/banner.png"
                        alt="Fametonic App Dashboard"
                        width={650}
                        height={500}
                        className="max-w-[650px] w-full h-auto mx-auto relative z-10"
                    />
                </div>
            </div>
        </div>
    );
}
