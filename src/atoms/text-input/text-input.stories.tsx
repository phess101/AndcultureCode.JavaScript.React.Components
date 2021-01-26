import React from "react";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { Icons } from "../constants/icons";
import { TextInput } from "./text-input";
import Faker from "faker";

export default {
    component: TextInput,
    title: "Atoms | Text Input",
};

export const textInputKnobs = () => (
    <TextInput
        disabled={boolean("Disabled", false)}
        icon={select("Icon", Icons, undefined)}
        id={Faker.random.uuid()}
        maxLength={number("Max Length", 30)}
        onChange={() => {}}
        placeholder={text("Placeholder", "Placeholder...")}
        value={text("Value", "Input Value")}
        isValid={boolean("Valid", true)}
    />
);
