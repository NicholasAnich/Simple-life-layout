// import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Mimalist Portfolio Home Page</title>
                <meta name="description" content="Minmalist Portfolio Project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <Header></Header>
                <main className={styles.main}>
                    <p>This is the portfolio page</p>

                    <Link href="/">Back</Link>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
}
