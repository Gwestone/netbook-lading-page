import { inspect } from "util";
import styles from "./Achievements.module.scss";
import Image from "next/image";

export default function Achievements() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.rating}>
          <div className={styles.ratingIcon}>
            <Image src={"./star.svg"} alt="star" width={25} height={25} />
            4.8 Rating
          </div>
          <div className={styles.members}>+836k Members</div>

          <div className={styles.desc}>
            More than 2 billion we people over countries use socibooks we to
            stay in touch with friends.
          </div>
          <div className={styles.join}>Join Our Community &#8594;</div>
        </div>
        <div className={styles.awards}>
          <div>Awards</div>
          <div>Best of 2021 on Github</div>
          <div>
            More than 2 billion we people over countries use socibooks we to
            stay in touch with friends.
          </div>
          <div>Go to Awards &#8594;</div>
        </div>
        <div className={styles.achievement}>
          <div>Our Achievement</div>
          <div>We are connecting You The Digital Life.</div>
          <div>
            The scope the Social Media becomes crucial Is helps the business to
            directly engage with their needs and wants.
          </div>
          <div>Discover me &#8594;</div>
        </div>
      </div>
    </div>
  );
}
