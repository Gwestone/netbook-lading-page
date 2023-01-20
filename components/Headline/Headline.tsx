import styles from "./Headline.module.scss";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import {useInView} from "react-intersection-observer";

export default function Headline() {

  const {ref, inView} = useInView({
    threshold: 1,
    delay: 1,
    triggerOnce: true
  });

  let arr = [];

  for (let i = 0; i < 4; i++) {
    arr.push("animate__" + ((Math.random() < 0.5) ? "fast" : "faster"));
  }

  return (
    <div className={styles.headlineContainer}>
      <Navbar />
      <div className={styles.container}>
        {/*start text content for headline*/}
        <div className={styles.headlineContent} ref={ref}>
          <div className={styles.community + " " + (inView ? `animate__animated animate__fadeInLeft ${arr[0]}` : "default")}>
            <button className={styles.communityButton}>
              Network community
            </button>
          </div>
          <div className={styles.solutionsForCommunity + " " + (inView ? `animate__animated animate__fadeInLeft ${arr[1]}` : "default")}>
            Your Solutions For Community!
          </div>
          <div className={styles.moreThan + " " + (inView ? `animate__animated animate__fadeInLeft ${arr[2]}` : "default")}>
            More than 2 billion people in over countries use socibook to stay in
            touch with friends & family
          </div>
          <div className={styles.buttons + " " + (inView ? `animate__animated animate__fadeInLeft ${arr[3]}` : "default")}>
            <button className={styles.about}>About More</button>
            <button className={styles.invite}>Invite Friend</button>
          </div>
        </div>
        {/*end text content for headline*/}
        <div className={styles.headlineImage}>
          <div className={styles.imageContainer}>
            <Image
              src={"./HeadlineImage.svg"}
              alt={"headline"}
              width={585}
              height={501}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
