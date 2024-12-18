import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from '@/app/components/Footer'
import {Space_Grotesk} from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const space = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Edward Liu",
  description: "Edward Liu's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className = {space.className}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
