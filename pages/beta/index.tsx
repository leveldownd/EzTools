import styles from "../../styles/Beta.module.css";
import fetchData from "../../lib/parsejson";

export function getStaticProps() {
  const data = fetchData();

  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return (
    <main className={styles.main}>
      <h1 className="smaller">👀 Find new tools and resources.</h1>
    </main>
  );
}
