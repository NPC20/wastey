import "../styles/globals.css";
import { ProvideAuth } from "../src/useAuth.js";
import "../styles/Signup.module.css";
import "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}

export default MyApp;
