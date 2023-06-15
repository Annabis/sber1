import {Input} from "../../shared/ui/input/Input";
import "./main.css";

export const MainForm = () => {
    return (
        <div className="mainForm">
            <div>
                <div className="formGroup">
                    <span className="label">Yyhr</span>
                    <Input
                        placeholder="enter name"
                        id="phone"
                        type="tel"
                        pattern="(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?"
                    />
                </div>
            </div>
        </div>
    );
};
