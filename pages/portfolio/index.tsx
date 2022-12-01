import Head from "next/head";
import Link from "next/link";

import Reachout from "../../components/reachout";
import Designs from "../../components/designs";

import portfolio from "../../styles/Portfolio.module.css";

import { projects } from "../../data";
import { Project } from "../../lib/types";

export const getStaticProps = async () => {
    return {
        props: {
            projectList: projects,
        },
    };
};

export default function Portfolio({ projectList }: { projectList: Project }) {
    const projects = projectList.map((project, i) => {
        const {
            id,
            projectName,
            // summary,
            // images: { mobile, tablet, desktop },
        } = project;

        return (
            <div key={`${projectName}${i}`}>
                <Designs key={id} {...project} />
            </div>
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
