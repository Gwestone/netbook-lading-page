import styles from "./Navbar.module.scss";
import Image from "next/image";
function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar + " " + styles.container}>
        <div className={styles.left_menu}>
          <div className={styles.logo}>
            <Image
              priority
              src="./Icons/netbook.svg"
              width={34}
              height={34}
              alt="Logo"
              className={styles.logo_icon}
            />
            <div className={styles.logo_text}>Netbook</div>
          </div>
          <div className={styles.menu}>
            <div className={styles.option + " " + styles.active}>Home</div>
            <div className={styles.option}>Community</div>
            <div className={styles.option}>Blog</div>
            <div className={styles.option}>Events</div>
          </div>
        </div>
        <div className={styles.right_menu}>
          <div className={styles.option + " " + styles.search}>
            <Image
              className={styles.searchGlass}
              src="./Icons/searchGlass.svg"
              alt={"search glass icon"}
              width={12}
              height={12}
            />
            Search Hare...
          </div>
          <div className={styles.option}>
            <button className={styles.searchButton}>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
