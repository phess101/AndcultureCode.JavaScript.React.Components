import React from "react";
import { render } from "@testing-library/react";
import faker from "faker";
import { Paragraph } from "./paragraph";
import { ParagraphSizes } from "../constants/paragraph-sizes";

describe("Paragraph", () => {
    test("when default props, renders paragraph with text", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(<Paragraph>{expected}</Paragraph>);

        // Assert
        expect(getByText(expected)).not.toBeNil();
    });

    test("when default props, renders paragraph with component class", () => {
        // Arrange
        const expected = "c-paragraph";

        // Act
        const { container } = render(<Paragraph></Paragraph>);

        // Assert
        expect(container.firstChild.className).toContain(expected);
    });

    test("when given cssClassName prop, renders paragraph with given class name", () => {
        // Arrange
        const expected = "testClassName";

        // Act
        const { container } = render(<Paragraph cssClassName={expected}></Paragraph>);

        // Assert
        expect(container.firstChild.className).toContain(expected);
    });

    test("when size provided, adds size className to paragraph", () => {
        // Arrange
        const expected = ParagraphSizes.Large;

        // Act
        const { container } = render(<Paragraph size={expected}></Paragraph>);

        // Assert
        expect(container.firstChild.className).toContain(`-${expected}`);
    });
});
