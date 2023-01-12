import styles from "./Navbar.module.scss";
import Image from "next/image";
function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.left_menu}>
        <div className={styles.logo}>
          <Image
            priority
            src="./netbook.svg"
            width={40}
            height={40}
            alt="Logo"
            className={styles.logo_icon}
          />
          <div className={styles.logo_text}>Netbook</div>
        </div>
        <div className="menu">
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
            src="./searchGlass.svg"
            alt={"search glass icon"}
            width={12}
            height={12}
          />
          Search Hare...
        </div>
        <div className={styles.option}>
          <button>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
