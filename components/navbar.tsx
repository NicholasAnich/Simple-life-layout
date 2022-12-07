import { useState } from "react";
import { Public_Sans } from "@next/font/google";
import { clsx } from "clsx";

import Link from "next/link";
import Image from "next/image";

import styles from "./NavBar.module.css";
import { useRouter } from "next/router";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const router = useRouter();
    const currentRoute = router.pathname;

    const handleToggle = () => {
        setNavbarOpen((prev) => !prev);
    };
    const state = clsx({
        active: true,
        nonActive: false,
    });

    return (
        <header className={`${styles.container} ${publicSans.className}`}>
            <div className={styles.body}>
                <Link href={"/"}>
                    <Image className={styles.img} src="/images/logo.svg" alt="Arrow Logo" width={60} height={32}></Image>
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link href="/" className={clsx(styles.link, currentRoute === "/" && styles[state])}>
                                Home
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link
                                href="/portfolio"
                                className={clsx(styles.link, currentRoute !== "/" && currentRoute !== "/contact" && styles[state])}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/contact" className={clsx(styles.link, currentRoute === "/contact" && styles[state])}>
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
                        <Link href="/" className={clsx(styles.burgerItem, currentRoute === "/" && styles[state])}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link
                            href="/portfolio"
                            className={clsx(styles.burgerItem, currentRoute !== "/" && currentRoute !== "/contact" && styles[state])}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/contact" className={clsx(styles.burgerItem, currentRoute === "/contact" && styles[state])}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
