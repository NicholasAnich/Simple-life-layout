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
                        <div className={styles.flex_container}>
                            <div className={styles.btnImage}>
                                <Image
                                    className={styles.btnArrows}
                                    src="/images/icons/down-arrows.svg"
                                    alt="down arrow icon"
                                    width={16}
                                    height={15}
                                ></Image>
                            </div>
                            <div className={styles.btn}>
                                <p className={styles.btnText}>ABOUT ME</p>
                            </div>
                        </div>
                    </button>
                    <div className={styles.aboutMeSection}>
                        <div className={styles.author}>
                            <img className={styles.authorImg} src="/images/homepage/mobile/image-homepage-profile.jpg" alt="Alex Spencer" />
                        </div>
                        <div className={styles.aboutMe}>
                            <h2 className={styles.aboutTitle}>About Me</h2>
                            <p className={styles.aboutBody}>
                                I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML,
                                using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can
                                adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in
                                remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a
                                walk, run or cycling. I’d love you to check out my work.
                            </p>
                            <Link className={styles.linkBtn} href={"/portfolio"}>
                                GO TO PORTFOLIO
                            </Link>
                        </div>
                        <div>
                            <h2>Interested in doing a project together?</h2>
                            <Link className={styles.linkBtn} href={"/contact"}>
                                Contact Me
                            </Link>
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
