import type { Metadata } from "next";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Inter } from "next/font/google";
import "primereact/resources/themes/lara-light-cyan/theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider>
              {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
