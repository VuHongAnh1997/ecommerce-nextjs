import Header from "@/components/header/Header";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "DIEPV store",
  description: "Dream come true",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} bg-slate-100 overflow-x-hidden`}
      >
        <Header />
        <div className="max-w-[1440px] m-auto">{children}</div>
      </body>
    </html>
  );
}
