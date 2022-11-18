// import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../components/layout";

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Mimalist Portfolio Home Page</title>
                <meta name="description" content="Minmalist Portfolio Project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div className={styles.container}> */}
            <Layout home={false}>
                <p>This is the portfolio page</p>
                <Link href="/">Back</Link>
            </Layout>
        </div>
    );
}
