import "../styles/globals.css";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

const montrealMedium = localFont({
  src: "../public/PPNeueMontreal-Medium.otf",
  variable: "--montreal",
});

function App({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <DefaultSeo
        title="Places to Read"
        description="Discover handpicked parks around the world where you can sit down and enjoy a good book."
        canonical="https://www.placestoread.xyz/"
        openGraph={{
          type: "website",
          locale: "en",
          url: "https://www.placestoread.xyz/",
          title: "Places to Read",
          description:
            "Discover handpicked parks around the world where you can sit down and enjoy a good book.",
          images: [
            {
              url: "https://www.placestoread.xyz/og.png",
              width: 1200,
              height: 630,
              alt: "Text of the title and description with a backdrop of a park",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@typicalmitul",
          site: "@typicalmitul",
          cardType: "summary_large_image",
        }}
      />
      <div
        className={`flex flex-col isolate min-h-full ${montrealMedium.className}`}
      >
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌳</text></svg>"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default App;
