import React from "react";
import Footer from "./footer";
import Header from "./header";
import styles from "./Layout.module.css";
import other from "../styles/Home.module.css";

export default function Layout({ children, home }: { children: React.ReactNode; home: boolean }) {
    return (
        <>
            <Header />
            <>
                <main className={styles.container}>{children}</main>
            </>
            <Footer />
        </>
    );
}
