import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tata's Tacos | Authentic Mexican Tacos in Chicago's Six Corners",
  description:
    "Family-owned Mexican taco spot in Chicago's Six Corners neighborhood. Fresh, authentic tacos made daily with recipes passed down through generations. Order online or visit us today.",
  openGraph: {
    title: "Tata's Tacos | Authentic Mexican Tacos in Chicago",
    description:
      "Family-owned Mexican taco spot in Chicago's Six Corners. Fresh, authentic tacos made daily.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
