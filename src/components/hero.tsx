import { ArrowRight } from "lucide-react";
import { HeroProps } from "@/utils/interfaces/component-props";
import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/images/banner.png";

export function Hero({ featurePoints }: HeroProps) {
    return (
        <div className="flex flex-col md:flex-row md:w-[1124px] w-full md:relative">
            {/* Left content column */}
            <div className="w-full md:w-[516px] order-2 md:order-1 md:mt-9 z-20">
                <h2 className="text-center md:text-left text-[25px] md:text-[35px] leading-8 md:leading-10 font-black md:font-bold font-urbanist tracking-normal">
                    Want to Turn Social Media Into a Profitable Career?
                </h2>
                <h3
                    className="text-center md:text-left text-[25px] md:text-[35px] leading-8 md:leading-10 font-black md:font-bold text-aqua font-urbanist mb-3"
                    style={{
                        textShadow: "0 4px 8px var(--color-folly)",
                    }}
                >
                    Discover your way to success with Fametonic:
                </h3>

                {/* Feature Points */}
                <div className="space-y-2 mb-5">
                    {featurePoints.map((feature: string, index: number) => (
                        <div
                            key={index}
                            className="flex items-center font-medium md:font-semibold text-base leading-[22px]"
                        >
                            <span className="mr-3">✨</span>
                            <p className="text-white ">{feature}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Button with Terms */}
                <div className="flex flex-col justify-center gap-y-8 mt-6">
                    <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
                        {/* CTA Button */}
                        <div className="max-w-[350px] md:max-w-[313px] w-full">
                            <Link
                                href="#"
                                className="h-[40px] inline-flex justify-center items-center w-full bg-folly text-white text-xl font-bold py-3 rounded-lg transition-all duration-300"
                                style={{
                                    boxShadow: "0 0 15px var(--color-aqua)",
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
                    <div className="order-1 md:order-2 text-center md:text-left text-gray-400 font-medium px-8 md:px-0">
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

                        <p className="text-[10px] mt-4">
                            Fametonic 2025 ©All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right image column */}
            <div className="md:absolute md:w-[666px] md:h-[679px] md:overflow-hidden md:right-0 md:-top-13">
                <Image
                    src={banner}
                    alt="Fametonic App Dashboard"
                    width={666}
                    height={679}
                    className="max-w-full w-full h-auto mx-auto relative z-10"
                />
            </div>
        </div>
    );
}
