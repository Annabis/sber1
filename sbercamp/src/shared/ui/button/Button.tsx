import {ButtonProps} from "./button.interface";
import "./button.css";

export const Button = ({children, outlined, ...props}: ButtonProps) => {
    const className = outlined ? "button outlined" : "button";
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};
