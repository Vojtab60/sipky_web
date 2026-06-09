import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Šipky Praha | Steel Darts Turnaje v Praze",
    template: "%s | Šipky Praha",
  },
  description:
    "Mobilní profesionální steel darts setup pro pražské hospody. Přivezeme terče, osvětlení, scoring a odřídíme turnajový večer.",
  keywords: ["šipky Praha", "steel darts", "turnaje v šipkách", "pražské hospody", "darts league"],
  metadataBase: new URL("https://sipkypraha.cz"),
  openGraph: {
    title: "Šipky Praha",
    description: "Mobilní profesionální steel darts setup a turnaje v pražských hospodách.",
    url: "https://sipkypraha.cz",
    siteName: "Šipky Praha",
    locale: "cs_CZ",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
