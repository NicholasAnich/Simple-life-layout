import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import footer from "./Footer.module.css";
export default function Footer() {
    return (
        <div className={footer.body}>
            <Image src="/images/logo-light.svg" alt="Light Logo" width={60} height={32}></Image>
            <ul className={footer.list}>
                <li className={styles.item}>
                    <Link href="/" className={footer.link}>
                        Home
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/about" className={footer.link}>
                        Portfolio
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/contact" className={footer.link}>
                        Contact Me
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="#">
                        <Image src="/images/icons/github-light.svg" alt="github logo and link" width={25} height={24}></Image>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image src="/images/icons/twitter-light.svg" alt="twitter logo and link" width={24} height={19.5}></Image>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image src="/images/icons/linkedin-light.svg" alt="Linkedin logo and link" width={24} height={24}></Image>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
