import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { INSTITUTION_NAME } from "./config/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${INSTITUTION_NAME} - Quality Education & Expert Guidance`,
  description: "Empowering students to achieve their dreams through quality education and expert guidance for overseas studies.",
  keywords: "education, overseas studies, university admission, study abroad, courses, counseling",
  authors: [{ name: INSTITUTION_NAME }],
  openGraph: {
    title: `${INSTITUTION_NAME} - Quality Education & Expert Guidance`,
    description: "Empowering students to achieve their dreams through quality education and expert guidance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
