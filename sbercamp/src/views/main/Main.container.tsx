import {Formik} from "formik";
import {getInitialValues} from "./getInitialState";
import {MainLayout} from "./Main.layout";

const initialValues = getInitialValues();

export const MainPage = () => {
    return (
        <Formik initialValues={initialValues} onSubmit={console.log}>
            <MainLayout />
        </Formik>
    );
};
