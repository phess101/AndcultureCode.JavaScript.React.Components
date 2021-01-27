import React from "react";
import { render } from "@testing-library/react";
import { List, ListIconClassName } from "./list";
import faker from "faker";
import { Icons } from "../../atoms/constants/icons";

describe("UnorderedList", () => {
    test("when default props, renders items", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(<List listItems={[expected]} />);

        // Assert
        expect(getByText(expected)).not.toBeNull();
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

    test(`when default props and include icon, renders with class name ${ListIconClassName}`, () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(
            <List listItems={[expected]} listIcon={Icons.Checkmark} />
        );
        const result = container.querySelector(
            "." + ListIconClassName
        );

        // Assert
        expect(result).not.toBeNil();
    });
});
