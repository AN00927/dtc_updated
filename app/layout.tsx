import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { OverlayProvider } from "@/lib/overlay-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dtcpolicylab.org";
const siteName = "DTC Policy Lab";
const siteDescription =
  "DTC Policy Lab is a teen-led research lab producing IRB-approved, peer-reviewable research on the laws that govern young people's online lives — built at the UN Internet Governance Forum and now publishing into the global policy pipeline.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Teen-led digital policy research`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "DTC Policy Lab",
    "Dynamic Teen Coalition",
    "youth policy lab",
    "teen digital rights",
    "social media bans",
    "youth internet policy",
    "UN IGF",
    "Internet Governance Forum",
    "teen-led research",
    "platform governance",
    "AI governance youth",
  ],
  authors: [{ name: "Dynamic Teen Coalition" }],
  creator: "Dynamic Teen Coalition",
  publisher: "DTC Policy Lab",
  category: "Public policy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} — Teen-led digital policy research`,
    description: siteDescription,
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Teen-led digital policy research`,
    description: siteDescription,
    creator: "@dtcpolicylab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <OverlayProvider>
          {children}
        </OverlayProvider>
      </body>
    </html>
  );
}
