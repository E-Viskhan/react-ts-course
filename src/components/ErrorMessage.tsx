import {HTMLAttributes} from "react";

interface ErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
    error: string
}

export const ErrorMessage = ({ error, className,...rest }: ErrorMessageProps) => {
    const cls = className
        ? " " + className
        : '';

    return (
        <span
            className={"block text-center text-red-600" + cls}
            {...rest}
        >
            {error}
        </span>
    );
};