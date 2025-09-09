import "@/styles/globals.css";
import { Geist, Geist_Mono, Poppins } from "next/font/google";

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
      <Component {...pageProps} />
    </div>
  );
}
