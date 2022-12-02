import { projects } from "../../data";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { Project } from "../../lib/types";
import Reachout from "../../components/reachout";

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
    let next = id + 1;
    let prev = id - 1;

    if (id === 0) {
        prev = projects.length - 1;
    } else if (id === projects.length - 1) {
        next = 0;
    }

    const nextName = projects[next].projectName;
    const prevName = projects[prev].projectName;

    const languageMeta = languages.map((language: string) => <span key={language}>{language} </span>);
    const mobilePreview = details.preview.mobile;
    const tabletPreview = details.preview.tablet;
    const desktopPreview = details.preview.desktop;

    // console.log(mobilePreview.sm);
    return (
        <>
            <picture>
                <source />
                <img src={details.hero.mobile.sm} alt="" />
            </picture>
            <div>
                <h1>{projectName}</h1>
                <p>{summary}</p>
            </div>

            <div>
                <span>
                    {type} / {engineer}
                </span>
                {languageMeta}
            </div>
            <Link href="#">
                <button>Visit Website</button>
            </Link>
            <div>
                <h3>Project Background</h3>
                <p>{background}</p>
            </div>
            <div>
                <h3>Static Previews</h3>
                <picture>
                    <source />
                    <img src={mobilePreview.sm[1]} alt="" />
                </picture>
                <picture>
                    <source />
                    <img src={mobilePreview.sm[2]} alt="" />
                </picture>
            </div>
            <div>
                <div>
                    <Link href={`/portfolio/${prevName}`}>
                        <p>{prevName}</p>
                        <p>Previous Project</p>
                    </Link>
                </div>
                <div>
                    <Link href={`/portfolio/${nextName}`}>
                        <p>{nextName}</p>
                        <p>Next Project</p>
                    </Link>
                </div>
            </div>
            <Reachout />
        </>
    );
};

export default Project;
