import Link from "next/link";
import portfolio from "../styles/Portfolio.module.css";
import designs from "./Designs.module.css";

export default function Designs({ id, ...project }) {
    const {
        projectName,
        summary,
        images: { mobile, tablet, desktop },
    } = project;
    // console.log(projectName);
    return (
        <div key={`${projectName}${id}`}>
            <picture>
                <source />
                <img className={designs.images} src={mobile.sm} alt={projectName} />
            </picture>
            <div className={designs.body}>
                <h2 className={designs.title}>{projectName}</h2>
                <p className={designs.summary}>{summary}</p>
                <Link className={designs.linkBtn} href={`/portfolio/[name]`} as={`/portfolio/${projectName}`}>
                    View Project
                </Link>
            </div>
        </div>
    );
}
