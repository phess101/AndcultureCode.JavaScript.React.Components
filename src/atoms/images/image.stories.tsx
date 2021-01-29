import { Image } from "./image";
import React from "react";
import { text } from "@storybook/addon-knobs";

export default {
    component: Image,
    title: "Atoms | Image",
};

export const image = () => (
    <Image
        altText={text("Alt", "A description of the image for assistive devices")}
        cssClassName={text("Class", "")}
        src={text("Src", "https://via.placeholder.com/350x150")}
    />
);
