import styles from "./LastestNews.module.scss";
import Image from "next/image";
export default function LastestNews() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionSubTitle}>Get Our Aplication</div>
      <div className={styles.sectionTitle}>Latest News</div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            className={styles.cardImage}
            src={"/temp/news1.png"}
            alt={"news1"}
            width={350}
            height={350}
          />
          <div className={styles.cardTitle}>
            <div className={styles.line}></div>
            <div className={styles.text}>
              It Does Not Matter Hows Sawdwadwaddadlowly go as Long
            </div>
          </div>
          <div className={styles.cardLink}>Continue Reading &rarr;</div>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImage}
            src={"/temp/news2.png"}
            alt={"news1"}
            width={350}
            height={350}
          />
          <div className={styles.cardTitle}>
            <div className={styles.line}></div>
            <div className={styles.text}>
              Netbook Network Added New Photo Filter
            </div>
          </div>
          <div className={styles.cardLink}>Continue Reading &rarr;</div>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImage}
            src={"/temp/news3.png"}
            alt={"news1"}
            width={350}
            height={350}
          />
          <div className={styles.cardTitle}>
            <div className={styles.line}></div>
            <div className={styles.text}>
              We Optimised Netbooks Better Navigation
            </div>
          </div>
          <div className={styles.cardLink}>Continue Reading &rarr;</div>
        </div>
      </div>
    </div>
  );
}
