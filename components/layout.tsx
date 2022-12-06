import Footer from "./footer";
import NavBar from "./navbar";
import styles from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layout}>
            {/* <div className={styles.navbar}> */}
            <NavBar />
            {/* </div> */}
            <main className={styles.container}>{children}</main>
            {/* <div className={styles.footer}> */}
            <Footer />
            {/* </div> */}
        </div>
    );
}
