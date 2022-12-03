import Link from "next/link";
import { useState } from "react";
import portfolio from "../styles/Portfolio.module.css";
import designs from "./Designs.module.css";

export default function Designs({ id, ...project }) {
    // const [isReversed, setIsReversed] = useState(false);
    const {
        projectName,
        summary,
        images: { mobile, tablet, desktop },
    } = project;
    // console.log({ mobile, tablet, desktop });
    let isReversed = false;

    if (id % 2 !== 0) {
        isReversed = true;
    }

    return (
        <div className={`${designs.container} ${isReversed ? designs.reversed : null}`} key={`${projectName}${id}`}>
            <div className={designs.imageContainer}>
                <picture>
                    <source srcSet={`${desktop.med} 540w, ${desktop.lg} 1080w`} media="(min-width: 960px)" />
                    <source srcSet={`${tablet.med} 339w, ${tablet.lg} 678w`} media="(min-width: 600px)" />
                    <source srcSet={`${mobile.sm} 311w, ${mobile.med} 622w`} />
                    <img className={designs.images} src={mobile.sm} srcSet={`${mobile.med} w622`} alt={projectName} />
                </picture>
            </div>
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
