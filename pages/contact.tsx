import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import contact from "../styles/Contact.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Mimalist Portfolio Home Page</title>
                <meta name="description" content="Minmalist Portfolio Project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <Header></Header>
                <main className={contact.main}>
                    <div className={contact.images}></div>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
}
