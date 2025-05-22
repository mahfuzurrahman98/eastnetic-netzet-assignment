import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero({ featurePoints }: { featurePoints: string[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between md:items-start gap-y-5">
            {/* Left content column */}
            <div className="w-full order-2 md:order-1 md:mt-8">
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
                    {featurePoints.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start">
                            <span className="text-amaranth-500 text-lg mr-3">
                                ✨
                            </span>
                            <p className="text-white">{feature}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Button with Terms */}
                <div className="flex flex-col justify-center gap-y-10 mt-6">
                    <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
                        {/* CTA Button */}
                        <div className="max-w-[350px] md:max-w-[313px] w-full">
                            <Link
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
                            </Link>
                            {/* Hints */}
                            <p className="text-xs text-center text-gray-400 mt-2">
                                1-minute quiz for personalized Insights
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="order-1 md:order-2 text-center md:text-left text-gray-400 px-8 md:px-0">
                        <p className="text-xs">
                            By clicking "Get Started", you agree with{" "}
                            <Link
                                href="#"
                                className="text-gray-400 hover:underline"
                            >
                                Terms and Conditions
                            </Link>
                            ,{" "}
                            <Link
                                href="#"
                                className="text-gray-400 hover:underline"
                            >
                                Privacy Policy
                            </Link>
                            ,{" "}
                            <Link
                                href="#"
                                className="text-gray-400 hover:underline"
                            >
                                Subscription Terms
                            </Link>
                        </p>

                        <p className="text-xs mt-4">
                            Fametonic 2025 ©All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right image column */}
            <div className="w-full order-1 md:order-2 -inset-1">
                <Image
                    src="/images/banner.png"
                    alt="Fametonic App Dashboard"
                    width={700}
                    height={600}
                    className="max-w-[700px] w-full h-auto mx-auto relative z-10"
                />
            </div>
        </div>
    );
}
