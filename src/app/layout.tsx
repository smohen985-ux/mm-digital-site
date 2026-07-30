import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
title: "M&M Digital — Marketing for Small Business Owners",
description:
"No long contracts. You talk to the person running your ads. Reports in plain English — not a dashboard nobody reads.",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en">
<body className={`${inter.variable} font-sans antialiased`}>
{children}
</body>
</html>
);
}
