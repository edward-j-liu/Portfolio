import type { Metadata } from "next";
import "./globals.css";
// import Footer from '@/app/components/Footer'
import {Open_Sans} from 'next/font/google'

const open = Open_Sans({
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
        className = {open.className}
      >
        {children}
        {/*<Footer />*/}
      </body>
    </html>
  );
}
