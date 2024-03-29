import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header";
import Providers from "@/components/provider/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyReaLog",
  description: "MyReaLog",
};

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
