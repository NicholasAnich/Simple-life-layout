import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen((prev) => !prev);
    };
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Image className={styles.img} src="/images/logo.svg" alt="Arrow Logo" width={60} height={32}></Image>
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
                <button className={`${styles.menu} ${navbarOpen ? "close" : "open"}`} aria-controls="menu" onClick={handleToggle}>
                    {navbarOpen ? (
                        <Image src="/images/icons/close.svg" alt="close nav menu" width={18} height={19}></Image>
                    ) : (
                        <Image src="/images/icons/hamburger.svg" alt="open nav menu" width={24} height={13}></Image>
                    )}
                </button>
                <ul className={`menuNav ${navbarOpen ? styles.showMenu : styles.hideMenu}`}>
                    <li className={styles.item}>
                        <Link href="/" className={styles.burgerItem}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/about" className={styles.burgerItem}>
                            Portfolio
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/contact" className={styles.burgerItem}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}
