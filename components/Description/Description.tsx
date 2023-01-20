import styles from "./Description.module.scss";
import Image from "next/image";
import {useInView} from "react-intersection-observer";
function Description() {

  const {ref, inView} = useInView({
    threshold: 1,
    delay: 1,
    triggerOnce: true
  });

  return (
    <div className={styles.container}>
      {/*start text container left*/}
      <div ref={ref} className={styles.text}>
        <div className={styles.whats + " " + (inView ? `animate__animated animate__fadeInLeft` : "default")}>Whats Netbooks?</div>
        <div className={styles.whyJoin + " " + (inView ? `animate__animated animate__fadeInLeft` : "default")}>
          Why Join to Netbook Social Network?
        </div>
        <div className={styles.surveys + " " + (inView ? `animate__animated animate__fadeInLeft` : "default")}>
          Recent surveys have indicated that small businesses recognise the need{" "}
          they have to connect with consumer.
        </div>
        <ul className={styles.list}>
          <li className={(inView ? `animate__animated animate__fadeInLeft` : "default")}>Groups</li>
          <li className={(inView ? `animate__animated animate__fadeInLeft` : "default")}>Messages</li>
          <li className={(inView ? `animate__animated animate__fadeInLeft` : "default")}>Share</li>
        </ul>
      </div>
      {/*end text container*/}
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
