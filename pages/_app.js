import "../styles/globals.css";
import Footer from "@/components/Footer";
import localFont from "@next/font/local";
import Header from "@/components/Header";

const montrealMedium = localFont({
  src: "../public/PPNeueMontreal-Medium.otf",
  variable: "--montreal",
});

function App({ Component, pageProps }) {
  return (
    <div
      className={`flex flex-col isolate min-h-full ${montrealMedium.className}`}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
