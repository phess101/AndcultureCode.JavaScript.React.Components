import { InputProperties } from "../interfaces/input-properties";
import { InputTypes } from "../constants/input-types";
import React from "react";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface PasswordInputProps extends InputProperties {
    id: string;
    isVisible: boolean;

    /**
     * Unique identifier used select the underlying <input> for functional/e2e testing
     */
    testId?: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const PasswordInput: React.FC<PasswordInputProps> = (
    props: PasswordInputProps
) => {
    const classNames: string[] = ["c-password-input"];

    const {
        disabled,
        id,
        isVisible,
        onChange,
        placeholder,
        testId,
        value,
    } = props;

    const type = isVisible ? InputTypes.Text : InputTypes.Password;

    return (
        <input
            className={classNames.join(" ")}
            data-testid={testId}
            disabled={disabled}
            id={id}
            maxLength={20}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
        />
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { PasswordInput };

// #endregion Export
