import React from "react";
import Footer from "./footer";
import Header from "./header";
import styles from "./Layout.module.css";
import other from "../styles/Home.module.css";

export default function Layout({ children, home }: { children: React.ReactNode; home: boolean }) {
    return (
        <div>
            <div className={styles.container}>
                <Header />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
}
