import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SnackbarProvider } from "@/contexts/SnackbarContext";
import Snackbar from "@/components/Snackbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Account Dashboard",
  description: "Manage your account holders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SnackbarProvider>
          {children}
          <Snackbar />
        </SnackbarProvider>
      </body>
    </html>
  );
}