import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Header from "../components/header";
// import Footer from "../components/footer";

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
