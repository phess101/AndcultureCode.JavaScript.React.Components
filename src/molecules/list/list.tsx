import React from "react";
import { StringUtils } from "andculturecode-javascript-core";
import "./list.scss";
import { ListStyles } from "../constants/list-styles";


// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface ListProps {
    cssClassName?: string;
    id?: string;
    isOrdered?: boolean;
    listItems: Array<any>;
    style?: ListStyles;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const List: React.FC<ListProps> = (
    props: ListProps
) => {
    let cssClassNames: string[] = [];

    if (StringUtils.hasValue(props.cssClassName)) {
        cssClassNames.push(props.cssClassName!);
    }

    if (props.style) {
        cssClassNames.push(`-${props.style}`);
    }

    const content = props.listItems?.map((listItem, index) => (
        <li key={index}>{listItem}</li>
    ));

    if (props.isOrdered) {
        return (
            <ol className={cssClassNames.join(" ")} id={props.id}>
                {content}
            </ol>
        );
    }

    return (
        <ul className={cssClassNames.join(" ")} id={props.id}>
            {content}
        </ul>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { List };

// #endregion Exports
