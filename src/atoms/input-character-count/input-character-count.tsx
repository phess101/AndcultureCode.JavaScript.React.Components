import React from "react";
import "./input-character-count.scss";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface InputCharacterCountProps {
    currentLength: number;
    maxLength: number;

    /**
     * Unique identifier used select the underlying <input> for functional/e2e testing
     */
    testId?: string;
}

// #endregion Interfaces

// -------------------------------------------------------------------------------------------------
// #region Component
// -------------------------------------------------------------------------------------------------

const InputCharacterCount: React.FC<InputCharacterCountProps> = (
    props: InputCharacterCountProps
) => {
    return (
        <div
            className="c-input-character-count"
            data-testid={props.testId}>
            {props.currentLength}/{props.maxLength}
        </div>
    );
};

// #endregion Component

// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

export { InputCharacterCount };

// #endregion Exports
