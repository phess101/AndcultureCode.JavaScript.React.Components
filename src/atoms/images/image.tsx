import * as React from "react";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface ImageProps {
    /**
     * Alt text to display for screenreaders or if the image does not load.
     *
     * @type {string}
     * @memberof ImageProps
     */
    altText?: string;

    /**
     * Optional class name to be applied to the img element.
     *
     * @type {string}
     * @memberof ImageProps
     */
    cssClassName?: string;

    /**
     * Path to the image to be rendered.
     *
     * @type {string}
     * @memberof ImageProps
     */
    src: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const Image: React.FC<ImageProps> = (props: ImageProps) => {
    let cssClassNames: Array<any> = ["c-image"];

    if (props.cssClassName) {
        cssClassNames.push(props.cssClassName);
    }

    return (
        <img alt={props.altText} className={cssClassNames.join(" ")} src={props.src} />
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { Image };

// #endregion Exports
