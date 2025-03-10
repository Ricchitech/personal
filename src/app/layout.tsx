import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "./Provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { SidebarProvider } from "@/context/SidebarContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BRG",
  description: "Created by Bharathraj Gowda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
