import { boolean, text } from "@storybook/addon-knobs";
import { Button } from "../../atoms/buttons/button";
import React from "react";
import { Tooltip } from "./tooltip";

export default {
    component: Tooltip,
    title: "Molecules | Tooltip",
};

export const tooltipKnobs = () => (
    <Tooltip
        content={text(
            "Tooltip Contents",
            "I am a tooltip, based on @tippyjs/react!"
        )}
        visible={boolean("Force Visibility", false) ?? undefined}>
        <Button>Hover Me!</Button>
    </Tooltip>
);
