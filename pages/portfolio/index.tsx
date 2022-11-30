import Head from "next/head";
import Image from "next/image";
import Reachout from "../../components/reachout";
import portfolio from "../../styles/Portfolio.module.css";
import Link from "next/link";
import { projects } from "../../data";

export const getStaticProps = async () => {
    return {
        props: {
            projectList: projects,
        },
    };
};

type Project = {
    name: string;
    summary: string;
    images: {
        mobile: {
            sm: string;
            med: string;
        };
        tablet: {
            med: string;
            lg: string;
        };
        desktop: {
            med: string;
            lg: string;
        };
    };
}[];

export default function Portfolio({ projectList }: { projectList: Project }) {
    const projects = projectList.map((project, i) => {
        const {
            name,
            summary,
            images: { mobile, tablet, desktop },
        } = project;

        return (
            <>
                {/* <img className={portfolio.images} src={`../.${mobile.sm}`} alt={name} /> */}
                <img className={portfolio.images} src={mobile.sm} alt={name} />
                <div className={portfolio.body}>
                    <h2 className={portfolio.title}>{name}</h2>
                    <p className={portfolio.summary}>{summary}</p>
                    {/* <button>View Project</button> */}
                    <Link className={portfolio.linkBtn} href={"#"}>
                        View Project
                    </Link>
                </div>
            </>
        );
    });

    return (
        <div>
            <Head>
                <title>Mimalist Portfolio Home Page</title>
                <meta name="description" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={portfolio.container}>{projects}</div>
            <Reachout />
        </div>
    );
}
