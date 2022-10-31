import "../styles/globals.css";
import Footer from "@/components/Footer";
import localFont from "@next/font/local";

const montrealMedium = localFont({
  src: "../public/PPNeueMontreal-Medium.otf",
  variable: "--montreal",
});

function App({ Component, pageProps }) {
  return (
    // to fix and make semantic

    <div className={montrealMedium.className}>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
