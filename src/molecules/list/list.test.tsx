import React from "react";
import { render } from "@testing-library/react";
import { List } from "./list";
import faker from "faker";

describe("UnorderedList", () => {
    test("when default props, renders items", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(<List listItems={[expected]} />);

        // Assert
        expect(getByText(expected)).not.toBeNull();
    });

    test("when default props, renders as unordered list", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(<List listItems={[expected]} />);

        const result = container.getElementsByTagName("ul");

        // Assert
        expect(result[0]).not.toBeNull();
    });

    test("when isOrdered prop true, renders as ordered list", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(<List isOrdered={true} listItems={[expected]} />);

        const result = container.getElementsByTagName("ol");

        // Assert
        expect(result[0]).not.toBeNull();
    });

    test("when cssClassName prop provided, renders with class name", () => {
        // Arrange
        const expected = faker.random.words();
        const cssClassNameTest = "cssClassNameTest";

        // Act
        const { container } = render(
            <List
                listItems={[expected]}
                cssClassName={cssClassNameTest}
            />
        );
        const result = container.querySelector("." + cssClassNameTest);

        // Assert
        expect(result).not.toBeNil();
    });
});
