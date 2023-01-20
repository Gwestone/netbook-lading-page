import styles from "./Team.module.scss";
import Image from "next/image";
import {useState} from "react";
export default function Team() {

  // TODO create animation for selection

  type GetBy = "Newest" | "Popular" | "Active";
  const [selected, setSelected] = useState<GetBy>("Active");

  return (
    <div className={styles.container}>
      <div className={styles.sectionSubTitle}>Valuable Team</div>
      <div className={styles.sectionTitle}>Our Active Members</div>
      <div className={styles.commnityText}>
        when an unknown printer took a galley of type and meeting fari scrambled
        it.
      </div>
      <div className={styles.buttonsGroup}>
        <button onClick={()=>setSelected("Newest")} className={(selected == "Newest") ? styles.active : ""}>Newest</button>
        <button onClick={()=>setSelected("Popular")} className={(selected == "Popular") ? styles.active : ""}>Popular</button>
        <button onClick={()=>setSelected("Active")} className={(selected == "Active") ? styles.active : ""}>Active</button>
      </div>

      <div className={styles.authorsCards}>
        <div className={styles.active}>
          <Image
            className={styles.ring}
            src={"./misc/ring.svg"}
            alt={"ring"}
            height={166}
            width={166}
          />
          <Image
            className={styles.cardImage}
            src={"/Portraits/Fahim_Rahman.png"}
            alt={"Rahim Rahman"}
            width={140}
            height={140}
          />
          <Image
            className={styles.checkIcon}
            src={"/Icons/check.svg"}
            alt={"Rahim Rahman"}
            width={24}
            height={24}
          />
          <div className={styles.cardTitle}>Fahim Rahman</div>
          <div className={styles.cardUsername}>@rahman</div>
        </div>

        <div>
          <Image
            className={styles.ring}
            src={"./misc/ring.svg"}
            alt={"ring"}
            height={166}
            width={166}
          />
          <Image
            className={styles.cardImage}
            src={"/Portraits/Kazi_Rahman.png"}
            alt={"Rahim Rahman"}
            width={140}
            height={140}
          />
          <Image
            className={styles.checkIcon}
            src={"/Icons/check.svg"}
            alt={"Rahim Rahman"}
            width={24}
            height={24}
          />
          <div className={styles.cardTitle}>Kazi Rahman</div>
          <div className={styles.cardUsername}>@Rahman</div>
        </div>
        <div>
          <Image
            className={styles.ring}
            src={"./misc/ring.svg"}
            alt={"ring"}
            height={166}
            width={166}
          />
          <Image
            className={styles.cardImage}
            src={"/Portraits/Masterero_Ali.png"}
            alt={"Rahim Rahman"}
            width={140}
            height={140}
          />
          <Image
            className={styles.checkIcon}
            src={"/Icons/check.svg"}
            alt={"Rahim Rahman"}
            width={24}
            height={24}
          />
          <div className={styles.cardTitle}>Masterero Ali</div>
          <div className={styles.cardUsername}>@Master</div>
        </div>
        <div>
          <Image
            className={styles.ring}
            src={"./misc/ring.svg"}
            alt={"ring"}
            height={166}
            width={166}
          />
          <Image
            className={styles.cardImage}
            src={"/Portraits/Alia_Karon.png"}
            alt={"Rahim Rahman"}
            width={140}
            height={140}
          />
          <Image
            className={styles.checkIcon}
            src={"/Icons/check.svg"}
            alt={"Rahim Rahman"}
            width={24}
            height={24}
          />
          <div className={styles.cardTitle}>Alia Karon</div>
          <div className={styles.cardUsername}>@Alia</div>
        </div>
      </div>
    </div>
  );
}
