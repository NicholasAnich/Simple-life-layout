import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Image src="/images/logo.svg" alt="Arrow Logo" width={60} height={32}></Image>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link href="/" className={styles.link}>
                                Home
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/about" className={styles.link}>
                                Portfolio
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/contact" className={styles.link}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
