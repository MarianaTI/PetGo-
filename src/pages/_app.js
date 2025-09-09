import BootstrapClient from "@/components/BootstrapClient";
import "@/styles/globals.css";
import "@/styles/style.css";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
        <Head>
          <meta name="viewport" content="PetGo! App" />
          <title>PetGo!</title>
          {/* <link rel="icon" href="/logo.ico" /> */}
        </Head>
        <div>
          <Component {...pageProps} />
          <BootstrapClient />
        </div>
    </div>
  );
}
