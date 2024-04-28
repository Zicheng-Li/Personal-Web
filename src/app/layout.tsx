import type { Metadata } from "next";
import { useEffect, useRef } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import  Script  from 'next/script';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evan Li",
  description: "This is Evan Li's personal website",
  keywords: ["Evan Li","Zicheng Li","李梓诚","McMaster University"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Dynamic imports for Vanta and THREE, as these rely on window object which is not available during SSR
    import('vanta/dist/vanta.topology.min.js').then((VANTA) => {
      if (vantaRef.current) {
        VANTA.TOPOLOGY({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x2a99bb
          // ... your Vanta options here ...
        });
      }
    });

        // Specify how to clean up after this effect:
        return () => {
          if (vantaRef.current && window.VANTA) {
            window.VANTA.TOPOLOGY().destroy();
          }
        };
      }, [vantaRef]);




  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
      <Providers>
        {children}
        </Providers>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js" strategy="beforeInteractive" />
        <Script 
          src="https://cdn.jsdelivr.net/npm/three@0.125.2/build/three.min.js"
          strategy="beforeInteractive"
        />
        </body>
    </html>
  );
}
