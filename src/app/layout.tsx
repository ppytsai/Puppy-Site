import type { Metadata } from "next";
import { Playfair_Display, Josefin_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Puppy Tsai Photography",
  description: "Between light and life, storytelling with purpose, curiosity, and care.",
  openGraph: {
    title: "Puppy Tsai Photography",
    description: "Between light and life, storytelling with purpose, curiosity, and care.",
    url: "https://www.puppytsai.com",
    siteName: "Puppy Tsai Photography",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${josefin.variable}`}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {children}
      </body>
    </html>
  );
}
