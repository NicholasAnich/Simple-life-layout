import { projects } from "../../data";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { Project } from "../../lib/types";
import Reachout from "../../components/reachout";
import styles from "../../styles/Projects.module.css";
import home from "../../styles/Home.module.css";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const projectList = projects.filter((p) => p.projectName === params?.name);
    return {
        props: {
            projectList: projectList[0],
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const pathList = projects.map((project) => ({ params: { name: project.projectName.toString() } }));

    return {
        paths: pathList,
        fallback: "blocking",
    };
};

const Project = ({ projectList }: { projectList: Project }) => {
    const { id, projectName, type, engineer, languages, background, summary, images, details } = projectList;
    let next = id + 1;
    let prev = id - 1;

    if (id === 0) {
        prev = projects.length - 1;
    } else if (id === projects.length - 1) {
        next = 0;
    }

    const nextName = projects[next].projectName;
    const prevName = projects[prev].projectName;

    const languageMeta = languages.map((language: string) => (
        <span className={styles.lng} key={language}>
            {language}{" "}
        </span>
    ));
    const mobilePreview = details.preview.mobile;
    const tabletPreview = details.preview.tablet;
    const desktopPreview = details.preview.desktop;
    const hero = details.hero;
    console.log(hero.tablet.med);
    return (
        <>
            <picture>
                <source media="(min-width: 1000px)" srcSet={`${hero.desktop.med} 1110w, ${hero.desktop.lg} 2220w`} />
                <source media="(min-width: 600px)" srcSet={`${hero.tablet.med} 689w, ${hero.tablet.lg} 1378w`} />
                <source srcSet={`${hero.mobile.sm} 311w, ${hero.mobile.med} 622w`} />
                <img className={styles.image} src={hero.mobile.sm} alt="" />
            </picture>
            <div className={styles.summaryContainer}>
                <div>
                    <h1 className={styles.title}>{projectName}</h1>
                    <p className={styles.summary}>{summary}</p>
                </div>

                <div className={styles.metaContainer}>
                    <span className={styles.projectType}>
                        {type} / {engineer}
                    </span>
                    <span className={styles.languages}>{languageMeta}</span>
                </div>
                <Link className={styles.link} href="#">
                    <button className={`${home.linkBtn} ${styles.btn}`}>Visit Website</button>
                </Link>
            </div>
            <div className={styles.backgroundContainer}>
                <h3 className={styles.subTitle}>Project Background</h3>
                <p className={styles.background}>{background}</p>
            </div>
            <div className={styles.previewsContainer}>
                <h3 className={styles.previewTitle}>Static Previews</h3>
                <picture>
                    <source />
                    <img className={styles.previewImage} src={mobilePreview.sm[1]} alt="" />
                </picture>
                <picture>
                    <source />
                    <img className={styles.previewImage2} src={mobilePreview.sm[2]} alt="" />
                </picture>
            </div>
            <div className={styles.navContainer}>
                <div className={styles.projectNav}>
                    <svg className={styles.leftArrow} xmlns="http://www.w3.org/2000/svg" width="10" height="16">
                        <path fill="none" stroke="#33323D" d="M9 0L1 8l8 8" />
                    </svg>
                    <Link className={`${styles.navBtn} ${styles.navBtnPrev}`} href={`/portfolio/${prevName}`}>
                        {/* <img className={styles.prev} src="./images/icons/arrow-left.svg" alt="" /> */}

                        <h3 className={styles.navTitle}>{prevName}</h3>
                        <p className={styles.navText}>Previous Project</p>
                    </Link>
                </div>
                <div className={`${styles.projectNav} ${styles.navNext}`}>
                    <svg className={styles.rightArrow} xmlns="http://www.w3.org/2000/svg" width="10" height="16">
                        <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8" />
                    </svg>
                    <Link className={`${styles.navBtn} ${styles.navBtnNext}`} href={`/portfolio/${nextName}`}>
                        <h3 className={styles.navTitle}>{nextName}</h3>
                        <p className={styles.navText}>Next Project</p>
                        {/* <img className={styles.next} src="./images/icons/arrow-right.svg" alt="" /> */}
                    </Link>
                </div>
            </div>
            <Reachout />
        </>
    );
};

export default Project;
