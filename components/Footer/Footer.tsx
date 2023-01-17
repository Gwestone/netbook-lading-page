import styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <div className={styles.menuOption}>
              <div className={styles.menuTitle}>Home</div>
              <div className={styles.menuLinks}>
                <div className={styles.menuLink}>Home</div>
                <div className={styles.menuLink}>Community</div>
                <div className={styles.menuLink}>Events</div>
                <div className={styles.menuLink}>Contact</div>
              </div>
            </div>
            <div className={styles.menuOption}>
              <div className={styles.menuTitle}>Resources</div>
              <div className={styles.menuLinks}>
                <div className={styles.menuLink}>Blog</div>
                <div className={styles.menuLink}>News</div>
                <div className={styles.menuLink}>Guides</div>
                <div className={styles.menuLink}>Help Center</div>
              </div>
            </div>
            <div className={styles.menuOption}>
              <div className={styles.menuTitle}>Community</div>
              <div className={styles.menuLinks}>
                <div className={styles.menuLink}>NewsFeed</div>
                <div className={styles.menuLink}>Profile</div>
                <div className={styles.menuLink}>Friends</div>
                <div className={styles.menuLink}>Forum</div>
              </div>
            </div>
            <div className={styles.menuOption}>
              <div className={styles.menuTitle}>Main links</div>
              <div className={styles.menuLinks}>
                <div className={styles.menuLink}>Members</div>
                <div className={styles.menuLink}>Activity</div>
                <div className={styles.menuLink}>Groups</div>
                <div className={styles.menuLink}>Private Group</div>
              </div>
            </div>
            <div className={styles.subscribeNews}>
              <div className={styles.newsTitle}>
                Subscribe Cirkle Newsletter
              </div>
              <div className={styles.newsText}>
                Subscribe to be the first one to know about updates. Enter your
                email
              </div>
              <div className={styles.newsEmail}>
                <input
                  className={styles.emailEnter}
                  type="text"
                  placeholder="Enter email..."
                />
                <button className={styles.emailSubmit}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.container + " " + styles.footer}>
          <div className={styles.copyright}>Besnik Creative Agency.</div>
          <div className={styles.logo}>Netbook</div>
          <div className={styles.social}>
            <Image
              src={"./Icons/twitter.svg"}
              alt={"twitter"}
              width={37}
              height={37}
            />
            <Image
              src={"./Icons/instagram.svg"}
              alt={"instagram"}
              width={37}
              height={37}
            />
            <Image
              src={"./Icons/facebook.svg"}
              alt={"facebook"}
              width={37}
              height={37}
            />
            <Image
              src={"./Icons/linkedIn.svg"}
              alt={"linkedIn"}
              width={37}
              height={37}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
