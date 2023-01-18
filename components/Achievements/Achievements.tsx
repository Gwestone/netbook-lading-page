import { inspect } from "util";
import styles from "./Achievements.module.scss";
import Image from "next/image";

export default function Achievements() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <Image
              className={styles.cardTitleImage}
              src={"./Icons/star.svg"}
              alt="star"
              width={25}
              height={25}
            />
            4.8 Rating
          </div>
          <div className={styles.cardTitle}>
            <Image
              className={styles.cardImages}
              src={"/last.png"}
              alt="last"
              width={80}
              height={50}
            />
            <div className={styles.cardSubTitle}>
              <div className={styles.membersCount}>+836k</div> Members
            </div>
          </div>

          <div className={styles.cardText}>
            More than 2 billion we people over countries use socibooks we to
            stay in touch with friends.
          </div>
          <div className={styles.cardRef}>Join Our Community &#8594;</div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <Image
              className={styles.cardTitleImage}
              src={"./Icons/cup.svg"}
              alt="star"
              width={25}
              height={25}
            />
            Awards
          </div>
          <div className={styles.cardSubTitle}>
            <Image
              className={styles.cardImages}
              src={"/Icons/github.png"}
              alt="last"
              width={50}
              height={50}
            />
            <div className={styles.cardSubTitle}>
              Best of <div className={styles.membersCount}>2021</div> on Github
            </div>
          </div>
          <div className={styles.cardText}>
            More than 2 billion we people over countries use socibooks we to
            stay in touch with friends.
          </div>
          <div className={styles.cardRef} style={{ color: "#4A4A56" }}>
            Discover me &#8594;
          </div>
        </div>

        <div className={styles.achievement}>
          <div className={styles.achievementTitle}>Our Achievement</div>
          <div className={styles.achievementText}>
            We are connecting You The Digital Life.
          </div>
          <div className={styles.achievementSubText}>
            The scope the Social Media becomes crucial Is helps the business to
            directly engage with their needs and wants.
          </div>
          <button className={styles.discover}>Discover me &#8594;</button>
        </div>
      </div>
    </div>
  );
}
