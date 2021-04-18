import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avoid food waste</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </div>
  );
}
