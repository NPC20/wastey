import "../styles/globals.css";
import { ProvideAuth } from "../src/useAuth.js";
import Navbar from "../components/navbar";
import Signup from "./signup";
import { useAuth } from "../src/useAuth.js";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
      <Navbar />
    </ProvideAuth>
  );
}

export default MyApp;
