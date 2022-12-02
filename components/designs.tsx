import Link from "next/link";
import portfolio from "../styles/Portfolio.module.css";
import designs from "./Designs.module.css";

export default function Designs({ id, ...project }) {
    const {
        projectName,
        summary,
        images: { mobile, tablet, desktop },
    } = project;
    console.log({ mobile, tablet, desktop });
    return (
        <div key={`${projectName}${id}`}>
            <picture>
                <source srcSet={`${desktop.med} 540w, ${desktop.lg} 1080w`} media="(min-width: 960px)" />
                <source srcSet={`${tablet.med} 339w, ${tablet.lg} 678w`} media="(min-width: 600px)" />
                <source srcSet={`${mobile.sm}, ${mobile.med} 622w`} />
                <img className={designs.images} src={mobile.sm} srcSet={`${mobile.med} w622`} alt={projectName} />
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
