import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
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
                    <p>
                        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero,
                        faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
                        felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque.
                    </p>
                    <h1>
                        Jived fox nymph
                        <br />
                        grabs quick waltz
                    </h1>
                    <h2>
                        Jived fox nymph
                        <br />
                        grabs quick waltz
                    </h2>
                    <h3>
                        Jived fox nymph
                        <br />
                        grabs quick waltz
                    </h3>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
}
