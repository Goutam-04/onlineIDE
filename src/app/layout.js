import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] ,});

export const metadata = {
  title: "C++ Compiler",
  description: "Dockerize Ide for code execution withour hassel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <Head>
     <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
