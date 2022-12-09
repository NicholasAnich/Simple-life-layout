import "../styles/globals.css";
import Layout from "../components/layout";
import styles from "../styles/App.module.css";
import { Public_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import { Fragment } from "react";

const publicSans = Public_Sans({
    weight: "400",
    variable: "--public-sans",
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <div className={`${publicSans.className} ${styles.container}`}>
                <Component {...pageProps} />
            </div>
        </Layout>
    );
}
