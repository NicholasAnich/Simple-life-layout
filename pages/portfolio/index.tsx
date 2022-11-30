import Head from "next/head";
import Image from "next/image";
import Reachout from "../../components/reachout";
import portfolio from "../../styles/Portfolio.module.css";
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
                <div>
                    <h2>{name}</h2>
                    <p>{summary}</p>
                    <button>View Project</button>
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
