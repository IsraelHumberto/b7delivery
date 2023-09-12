import { Product } from "@/types/Product";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: Product;
  mainColor: string;
  secondColor: string;
};

export const ProductItem = ({ data, mainColor, secondColor }: Props) => {
  return (
    <Link href={`/b7burguer/product/${data.id}`}>
      <div className={styles.container}>
        <div
          className={styles.head}
          style={{ backgroundColor: secondColor }}
        ></div>
        <div className={styles.info}>
          <figure className={styles.img}>
            <Image
              src={"/tmp/burguer.png"}
              alt="Hamburguer"
              width={141}
              height={118}
            />
          </figure>
          <div className={styles.catName}>{data.categoryName}</div>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.price} style={{ color: mainColor }}>
            {data.price}
          </div>
        </div>
      </div>
    </Link>
  );
};
