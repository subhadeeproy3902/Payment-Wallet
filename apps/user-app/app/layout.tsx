import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body
          className={inter.className}
          style={{
            scrollBehavior: "smooth",
          }}
        >
          {/* <AppbarClient /> */}
          {children}
        </body>
      </Providers>
    </html>
  );
}
