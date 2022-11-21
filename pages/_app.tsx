import "../styles/globals.css";
import Layout from "../components/layout";
import { Public_Sans } from "@next/font/google";
import type { AppProps } from "next/app";

const publicSans = Public_Sans({
    weight: "400",
    variable: "--public-sans",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <div className={publicSans.className}>
                <Component {...pageProps} />
            </div>
        </Layout>
    );
}
