import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
    subsets: ["latin"],
    display: "swap",
});

const urbanist = Urbanist({
    variable: "--font-urbanist",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Fametonic",
    description: "Experience the power of social media marketing",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${figtree.className} ${urbanist.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
