import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Todo App",
  description: "todo app for learning purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-bodyFont"}>
        <Layout>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
        </Layout>
      </body>
    </html>
  );
}
