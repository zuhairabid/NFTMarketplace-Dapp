import "@/styles/globals.css";
// Internal import
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
