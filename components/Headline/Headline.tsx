import styles from "./Headline.module.scss";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
export default function Headline() {
  return (
    <div className={styles.headlineContainer}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.headlineContent}>
          <div className={styles.community}>
            <button className={styles.communityButton}>
              Network community
            </button>
          </div>
          <div className={styles.solutionsForCommunity}>
            Your Solutions For Community!
          </div>
          <div className={styles.moreThan}>
            More than 2 billion people in over countries use socibook to stay in
            touch with friends & family
          </div>
          <div className={styles.buttons}>
            <button className={styles.about}>About More</button>
            <button className={styles.invite}>Invite Friend</button>
          </div>
        </div>
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
