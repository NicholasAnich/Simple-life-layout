import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Reachout from "../components/reachout";
import Footer from "../components/footer";

export default function Home() {
    return (
        <div className={styles.main}>
            <Head>
                <title>Minimalist Portfolio</title>
            </Head>
            <div className={styles.heroSection}>
                <span className={styles.heroImage}></span>
                <div className={styles.heroIntro}>
                    <h1 className={styles.heroTitle}>Hey, I&apos;m Alex Spencer and I love building beautiful websites</h1>
                    <a href="#about" className={styles.btnContainer}>
                        <div className={styles.grid_container}>
                            <span className={styles.btnImage}></span>
                            <span className={styles.btnImageDark}></span>
                            <svg className={styles.btnArrows} xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                                <g className={styles.stroke} fill="none" fillRule="evenodd" stroke="#5FB4A2">
                                    <path d="M0 9l8 4 8-4" />
                                    <path opacity=".5" d="M0 5l8 4 8-4" />
                                    <path opacity=".25" d="M0 1l8 4 8-4" />
                                </g>
                            </svg>

                            <span className={styles.btn}>
                                <p className={styles.btnText}>ABOUT ME</p>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div className={styles.aboutMeSection}>
                <div className={styles.author}>
                    <picture>
                        <source srcSet="/images/homepage/tablet/image-homepage-profile.jpg" media="(min-width: 600px)" />
                        <source srcSet="/images/homepage/tablet/image-homepage-profile@2x.jpg" media="(min-width: 850px)" />
                        <img className={styles.authorImg} src="/images/homepage/mobile/image-homepage-profile.jpg" alt="Alex Spencer" />
                    </picture>
                </div>
                <div className={styles.aboutMe} id="about">
                    <h2 className={styles.aboutTitle}>About Me</h2>
                    <p className={styles.aboutBody}>
                        I&apos;m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using
                        modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to
                        whatever tools are required. I&apos;m based in London, UK, but I&apos;m happy working remotely and have experience in remote
                        teams. When I&apos;m not coding, you&apos;ll find me outdoors. I love being out in nature whether that&apos;s going for a
                        walk, run or cycling. I&apos;d love you to check out my work.
                    </p>
                    <Link className={styles.linkBtn} href={"/portfolio"}>
                        GO TO PORTFOLIO
                    </Link>
                </div>
            </div>
            <Reachout />
        </div>
    );
}
