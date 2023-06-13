import {PageLayout} from "../../shared/ui/pageLayout/PageLayout";
import "./main.css";
import Folder from "./../../shared/icons/folder.png";

export const MainLayout = () => {
    return (
        <PageLayout widePadding>
            <div className="header">
                <div className="avatar">BN</div>
                <div className="info">
                    <div className="username">Иван Иванов</div>
                    <div className="folders">
                        <div className="folder">
                            <img src={Folder} alt="folder" />
                            <a href="#">Telegram</a>
                        </div>
                        <div className="folder">
                            <img src={Folder} alt="folder" />
                            <a href="#">GitHub</a>
                        </div>
                        <div className="folder">
                            <img src={Folder} alt="folder" />
                            <a href="#">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};
