import {PageLayoutProps} from "./pageLayout.interface";
import "./pageLayout.css";

export const PageLayout = ({children, widePadding}: PageLayoutProps) => {
    const className = widePadding ? "window widePadding" : "window";
    return (
        <div className="overlay">
            <div className={className}>{children}</div>
        </div>
    );
};
