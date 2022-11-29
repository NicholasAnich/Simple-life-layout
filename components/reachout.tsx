import Link from "next/link";
import styles from "./Reachout.module.css";

export default function Reachout() {
    return (
        <div>
            <div className={styles.contactMe}>
                <h2 className={styles.contactTitle}>Interested in doing a project together?</h2>
                <span className={styles.divider}></span>
                <div className={styles.linkContainer}>
                    <Link className={styles.linkBtn} href={"/contact"}>
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
}
