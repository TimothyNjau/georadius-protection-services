import { Inter, Montserrat } from 'next/font/google';
import Layout from "@/components/Layout/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <body className={`${inter.variable} ${montserrat.variable}`}>
       <Layout >
      <Component {...pageProps} />;
    </Layout>
    </body>
   
  );
}
