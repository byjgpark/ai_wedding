"use client"

import { Header } from "@/components/layout/header";
import Script from 'next/script'
// import { useRouter } from 'next/router';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const pathname = usePathname();
  // const isAuthPage = pathname === '/sign-in' || pathname === '/sign-up';

  return (
    <>
      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAPS_CLIENT_ID}`}
      ></Script>
      {/* <Header /> */}
      <Header />
      <body className={inter.className}>{children}</body>
    </>
  );
}
