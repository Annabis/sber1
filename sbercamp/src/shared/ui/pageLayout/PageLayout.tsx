import {PageLayoutProps} from "./pageLayout.interface";
import "./pageLayout.css";

export const PageLayout = ({children, widePadding}: PageLayoutProps) => {
    return (
        <div className="overlay">
            <div className="window">{children}</div>
        </div>
    );
};
