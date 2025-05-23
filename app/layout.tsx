import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/app/components/Footer'
import {Space_Grotesk} from 'next/font/google'

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
        {/*<Footer />*/}
      </body>
    </html>
  );
}
