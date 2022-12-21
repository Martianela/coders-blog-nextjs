import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextNProgress from "nextjs-progressbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="w-full">
        <div className="w-full overflow-hidden sm:max-w-[80%] mx-auto px-[10px] sm: px-none">
          <NextNProgress color="#2ecf77" height={4} />
          <Navbar />
          <main className="pb-32">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
