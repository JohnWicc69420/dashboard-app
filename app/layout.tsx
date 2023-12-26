import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import ThemeProvider from "./providers/ThemeProvider";
import { ThemeContextProvider } from "./context/ThemeContext";
import { ContextProvider } from "./context/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Wicc Dashboard App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <ContextProvider>
              <div className="flex ">
                <Sidebar />
                <div className="w-full">
                  <Navbar />
                  {children}
                </div>
              </div>
            </ContextProvider>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
