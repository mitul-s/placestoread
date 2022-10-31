import "../styles/globals.css";
import localFont from "@next/font/local";

const montrealMedium = localFont({
  src: "../public/PPNeueMontreal-Medium.otf",
  variable: "--montreal",
});

function App({ Component, pageProps }) {
  return (
    // TO FIX u cant have main here silly
    <main className={montrealMedium.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default App;
