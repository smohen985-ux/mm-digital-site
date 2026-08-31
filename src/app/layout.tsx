import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const origin = "https://smohen985-ux.github.io";
const siteUrl = `${origin}/mm-digital-site`;
const description =
  "We help businesses grow through Google Ads, Meta Ads, SEO, website development, and digital strategy—all managed by a dedicated expert focused on delivering measurable results.";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: "M&M Digital Pro — Marketing for Small Business Owners",
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "M&M Digital Pro — Marketing for Small Business Owners",
    description,
    url: siteUrl,
    siteName: "M&M Digital Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M&M Digital Pro — Marketing for Small Business Owners",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
