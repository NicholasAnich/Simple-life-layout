import Head from "next/head";
import Reachout from "../components/reachout";
import portfolio from "../styles/Portfolio.module.css";

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Mimalist Portfolio Home Page</title>
                <meta name="description" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div> */}
            <div className={portfolio.container}>
                <p>Hello there this is the portfolio page</p>
            </div>
            {/* </div> */}
            <Reachout />
        </div>
    );
}
