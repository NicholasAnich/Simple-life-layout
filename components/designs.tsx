import Link from "next/link";
import portfolio from "../styles/Portfolio.module.css";

export default function Designs({ id, ...project }) {
    const {
        projectName,
        summary,
        images: { mobile, tablet, desktop },
    } = project;
    // console.log(projectName);
    return (
        <div key={`${projectName}${id}`}>
            <img className={portfolio.images} src={mobile.sm} alt={projectName} />
            <div className={portfolio.body}>
                <h2 className={portfolio.title}>{projectName}</h2>
                <p className={portfolio.summary}>{summary}</p>
                <Link className={portfolio.linkBtn} href={`/portfolio/[name]`} as={`/portfolio/${projectName}`}>
                    View Project
                </Link>
            </div>
        </div>
    );
}
