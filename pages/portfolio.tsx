import Head from "next/head";
import Reachout from "../components/reachout";

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Mimalist Portfolio Home Page</title>
                <meta name="description" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div className={styles.container}> */}
            <Reachout />
        </div>
    );
}
