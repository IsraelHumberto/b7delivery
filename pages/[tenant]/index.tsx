import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SearchInput from "@/components/SearchInput";
import { Banner } from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

const handleSearch = (seachValue: string) => {
  console.log(seachValue);
};

const Home = () => {
  return (
    <div className={`${inter.className} ${styles.container}`}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem vindo (a)</div>
            <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLine}> </div>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput mainColor="#fb9400" onSearch={handleSearch} />
        </div>
      </header>

      <Banner />
    </div>
  );
};

export default Home;
