import { inspect } from "util";
import styles from "./Community.module.scss";
import Image from "next/image";

export default function Community() {
  return (
    <div className={styles.base}>
      <div className={styles.container}>
        <div className={styles.sectionSubTitle}>Our Community</div>
        <div className={styles.sectionTitle}>Community Main Feature</div>
        <div className={styles.commnityText}>
          The wise man therefore always holds in these matters to this principle
          of selection.
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image
                src={"./Icons/people.svg"}
                alt={"people"}
                height={105}
                width={105}
              />
            </div>
            <div className={styles.cartTitle}>Members, Friends</div>
            <div className={styles.cardText}>
              Members, Friends Connection ( like followers ), Private Message
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image
                src={"./Icons/people2.svg"}
                alt={"people"}
                height={105}
                width={105}
              />
            </div>
            <div className={styles.cartTitle}>Groups</div>
            <div className={styles.cardText}>
              Your users can create groups to let other users to join and talk
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image
                src={"./Icons/chat.svg"}
                alt={"people"}
                height={105}
                width={105}
              />
            </div>
            <div className={styles.cartTitle}>Forum</div>
            <div className={styles.cardText}>
              Forum is ready by BBPress. Your users can make topics and talk.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image
                src={"./Icons/puzzle.svg"}
                alt={"people"}
                height={105}
                width={105}
              />
            </div>
            <div className={styles.cartTitle}>Custom Module</div>
            <div className={styles.cardText}>
              You can create Members, Groups Module. We already created 3
              modules. It &apos s by drag & drop live builder.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image
                src={"./Icons/checkList.svg"}
                alt={"people"}
                height={105}
                width={105}
              />
            </div>
            <div className={styles.cartTitle}>List Builder</div>
            <div className={styles.cardText}>
              Members, Groups list can be modified by drag & drop live builder.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image
                src={"./Icons/list.svg"}
                alt={"people"}
                height={105}
                width={105}
              />
            </div>
            <div className={styles.cartTitle}>List Scroll Effects</div>
            <div className={styles.cardText}>
              8 different scroll effects are ready. You can always change by
              your tastes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
