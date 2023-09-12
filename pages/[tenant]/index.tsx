import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SearchInput from "@/components/SearchInput";
import { Banner } from "@/components/Banner";
import { ProductItem } from "@/components/ProductItem";

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

      <div className={styles.gridProducts}>
        <ProductItem
          data={{
            id: 1,
            image: "/tmp/burguer.png",
            name: "Texas Hamburguer",
            price: "R$ 29.99",
            categoryName: "Monstro",
          }}
          mainColor="#Fb9400"
          secondColor="#CCC"
        />
        <ProductItem
          data={{
            id: 2,
            image: "/tmp/burguer.png",
            name: "Texas Hamburguer",
            price: "R$ 29.99",
            categoryName: "Monstro",
          }}
          mainColor="#Fb9400"
          secondColor="#CCC"
        />
        <ProductItem
          data={{
            id: 3,
            image: "/tmp/burguer.png",
            name: "Texas Hamburguer",
            price: "R$ 29.99",
            categoryName: "Monstro",
          }}
          mainColor="#Fb9400"
          secondColor="#CCC"
        />
        <ProductItem
          data={{
            id: 4,
            image: "/tmp/burguer.png",
            name: "Texas Hamburguer",
            price: "R$ 29.99",
            categoryName: "Monstro",
          }}
          mainColor="#Fb9400"
          secondColor="#CCC"
        />
      </div>
    </div>
  );
};

export default Home;
