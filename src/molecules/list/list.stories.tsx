import React from "react";
import { List } from "./list";
import Faker from "faker";
import { select, boolean } from "@storybook/addon-knobs";
import { ListStyles } from "../constants/list-styles";

export default {
    component: List,
    title: "Molecules | List",
};

export const listDefault = () => (
    <List listItems={[Faker.lorem.text(), Faker.lorem.text()]} />
);

export const listKnobs = () => (
    <List
        style={select("Style", ListStyles, ListStyles.None)}
        isOrdered={boolean("Ordered", false)}
        listItems={[Faker.lorem.text(), Faker.lorem.text()]}
    />
);
