import React, { useEffect, useRef } from "react";
import Image from "next/image";
import picture from "./Picture.module.css";

export default function Picture({ folder, name, alt }: { folder: string; name: string; alt: string }) {
    const mobilePath = `/images/${folder}/mobile/image-${name}.jpg`;
    const tabletPath = `/images/${folder}/tablet/image-${name}.jpg`;
    const desktopPath = `/images/${folder}/desktop/image-${name}.jpg`;

    return (
        <div className={picture.container}>
            <div className={picture.mobile}>
                <Image src={mobilePath} alt={alt} fill />
            </div>
            <div className={picture.tablet}>
                <Image src={tabletPath} alt={alt} fill />
            </div>
            <div className={picture.desktop}>
                <Image src={desktopPath} alt={alt} fill />
            </div>
        </div>
    );
}
