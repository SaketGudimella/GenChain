import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GenChain",
  description: "GenChain is a blockchain-based platform for managing and tracking the supply chain of goods and services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <div className="flex-0">
            <Nav />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
