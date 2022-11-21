import Footer from "./footer";
import Header from "./header";
import styles from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className={styles.container}>{children}</main>
            <Footer />
        </>
    );
}
