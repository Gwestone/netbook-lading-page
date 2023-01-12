import styles from "./Description.module.scss";
import Image from "next/image";
function Description() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.whats}>Whats Netbooks?</div>
        <div className={styles.whyJoin}>
          Why Join to Netbook Social Network?
        </div>
        <div className={styles.surveys}>
          Recent surveys have indicated that small businesses recognise the need{" "}
          they have to connect with consumer.
        </div>
        <ul>
          <li>Groups</li>
          <li>Messages</li>
          <li>Share</li>
        </ul>
      </div>
      <div className={styles.images}>
        <div className={styles.row}>
          <Image
            className={styles.image}
            src="/comm.png"
            alt="alt"
            width={270}
            height={368}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.up}>
            <Image
              className={styles.image}
              src="/computer.png"
              alt="alt"
              width={265}
              height={238}
            />
          </div>
          <div className={styles.down}>
            <Image
              className={styles.image}
              src="/networking.png"
              alt="alt"
              width={265}
              height={238}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
