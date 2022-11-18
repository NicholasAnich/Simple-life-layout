import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>Minimalist Portfolio</title>
            </Head>
            <main className={styles.main}>
                <div>
                    <div className={styles.heroImage}></div>
                    <h1>Hey, I&apos;m Alex Spencer and I love building beautiful websites</h1>
                    <button className={styles.btnContainer}>
                        <div className={styles.grid_container}>
                            <div className={styles.btnImage}></div>
                            <div className={styles.btnImageDark}></div>
                            <svg className={styles.btnArrows} xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                                <g className={styles.stroke} fill="none" fill-rule="evenodd" stroke="#5FB4A2">
                                    <path d="M0 9l8 4 8-4" />
                                    <path opacity=".5" d="M0 5l8 4 8-4" />
                                    <path opacity=".25" d="M0 1l8 4 8-4" />
                                </g>
                            </svg>

                            <button className={styles.btn}>
                                <p className={styles.btnText}>ABOUT ME</p>
                            </button>
                        </div>
                    </button>
                    <div className={styles.aboutMeSection}>
                        <div className={styles.author}>
                            <img className={styles.authorImg} src="/images/homepage/mobile/image-homepage-profile.jpg" alt="Alex Spencer" />
                        </div>
                        <div className={styles.aboutMe}>
                            <h2 className={styles.aboutTitle}>About Me</h2>
                            <p className={styles.aboutBody}>
                                I&apos;m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible
                                HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I
                                can adapt to whatever tools are required. I&apos;m based in London, UK, but I&apos;m happy working remotely and have
                                experience in remote teams. When I&apos;m not coding, you&apos;ll find me outdoors. I love being out in nature whether
                                that&apos;s going for a walk, run or cycling. I&apos;d love you to check out my work.
                            </p>
                            <Link className={styles.linkBtn} href={"/portfolio"}>
                                GO TO PORTFOLIO
                            </Link>
                        </div>
                        <div className={styles.contactMe}>
                            <h2 className={styles.contactTitle}>Interested in doing a project together?</h2>
                            {/* <div> */}
                            <Link className={styles.linkBtn} href={"/contact"}>
                                Contact Me
                            </Link>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

{
    /* <Head>
                <title>Mimalist Portfolio Home Page</title>
                <meta name="description" content="Minmalist Portfolio Project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <Header></Header>
                <main className={styles.main}></main>
            </div>
            <Footer></Footer> */
}
