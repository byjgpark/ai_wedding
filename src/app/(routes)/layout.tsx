import { Header } from "@/components/layout/header";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header></Header>
      <body className={inter.className}>{children}</body>
    </>
  );
}
