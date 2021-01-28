import React from "react";
import { render } from "@testing-library/react";
import { Image } from "./image";
import faker from "faker";

describe("Image", () => {
    test("when default props, renders image", () => {
        // Arrange
        const expected = "https://via.placeholder.com/350x150";

        // Act
        const { container } = render(<Image src={expected} />);

        // Assert
        expect(container.firstChild.nodeName).toBe("IMG");
    });

    test("when altText prop has value, renders image with alt text", () => {
        // Arrange
        const expected = "https://via.placeholder.com/350x150";
        const altText = faker.lorem.words();

        // Act
        const { container } = render(<Image altText={altText} src={expected} />);

        // Assert
        expect(container.firstChild).toHaveProperty("alt", altText);
    });

    test("when cssClassName provided, assigned class property", () => {
        // Arrange
        const expected = "https://via.placeholder.com/350x150";
        const className = faker.lorem.word();

        // Act
        const { container } = render(<Image cssClassName={className} src={expected} />);

        // Assert
        expect(container.getElementsByClassName(className)[0]).not.toBeNull();
    });
});
