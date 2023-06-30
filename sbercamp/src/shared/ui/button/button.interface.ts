import {PropsWithChildren} from "react";

export interface ButtonProps
    extends PropsWithChildren<
        React.DetailedHTMLProps<
            React.ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >
    > {
    outlined?: boolean;
}
