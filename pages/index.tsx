import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EzTools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.smallerDesc}>
          EzTools
          <br />
          Made by developers, for developers.
          <br />
          Coming soon.
        </h1>
      </main>
    </div>
  );
}
