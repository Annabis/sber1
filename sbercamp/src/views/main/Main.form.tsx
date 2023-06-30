import {Button} from "../../shared/ui/button/Button";
import {Input} from "../../shared/ui/input/Input";
import "./main.css";

export const MainForm = () => {
    return (
        <div className="mainForm">
            <div className="formGroup">
                <span className="label">Номер телефона</span>
                <Input placeholder="+7 999 999-99-99" />
            </div>
            <div className="formGroup">
                <span className="label">Email</span>
                <Input placeholder="tim.jennings@example.com" />
            </div>
            <Button>ssss</Button>
        </div>
    );
};
