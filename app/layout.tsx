import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "DSLD Homes — Estimating Training",
  description: "Interactive training module for DSLD Homes estimating interns",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <Sidebar />
          <main className="min-h-screen lg:ml-64">
            {children}
          </main>
        </ClientProviders>
      </body>
    </html>
  );
}
