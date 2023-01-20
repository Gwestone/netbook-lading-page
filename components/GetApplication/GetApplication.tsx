import styles from "./GetApplication.module.scss";
import Image from "next/image";
import {useInView} from "react-intersection-observer";

export default function GetApplication() {

  const {ref, inView} = useInView({
    threshold: 1,
    delay: 1,
    triggerOnce: true
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} ref={ref}>
        <div className={styles.getAppLeft}>
          <div className={styles.getAppSubTitle}>Get Our Aplication</div>
          <div className={styles.getAppTitle}>
            You Can Easily Find This App…!
          </div>
          <div className={styles.getAppText}>
            I say chap that’s suing lavatory chip shop gosh off his smashing
            boot are you taking the piss posh loo brilliant.
          </div>
          <div className={styles.getAppLinks}>
            <Image
              className={styles.apple}
              src={"/misc/apple.png"}
              alt={"apple download"}
              height={50}
              width={150}
            />
            <Image
              className={styles.playmarket}
              src={"/misc/playmarket.png"}
              alt={"play market download"}
              height={50}
              width={150}
            />
          </div>
        </div>
        <div className={styles.getAppRight}>
          {/*TODO complete image*/}
          <Image
            className={styles.phoneImage + " " + (inView ? `animate__animated animate__fadeInUp` : "default")}
            src={"./misc/phone.svg"}
            alt={"phone"}
            width={470}
            height={562}
          />
        </div>
      </div>
    </div>
  );
}
