import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition/PageTransition";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`${geist.variable} ${geistMono.variable}`}>
      <CustomCursor />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <PageTransition key={router.asPath}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </div>
  );
}
