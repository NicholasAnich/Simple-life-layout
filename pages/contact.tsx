import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import contact from "../styles/Contact.module.css";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact Me</title>
                <meta name="description" content="Minmalist Portfolio Project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <section className={contact.main}>
                    <div className={contact.images}>
                        <p>contact here</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
