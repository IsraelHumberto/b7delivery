import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.slide}>
          <Image
            src="/tmp/banner-01.png"
            alt="Banner Principal"
            width={920}
            height={540}
            loading="lazy"
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src={"/tmp/banner-02.png"}
            alt="Banner Principal"
            width={920}
            height={540}
            loading="lazy"
            className={styles.img}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
