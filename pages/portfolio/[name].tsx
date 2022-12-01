import { projects } from "../../data";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { Project } from "../../lib/types";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const projectList = projects.filter((p) => p.projectName === params.name);
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
    return <></>;
};

export default Project;
