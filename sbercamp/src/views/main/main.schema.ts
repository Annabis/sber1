import Yup from "yup";

export const MainFormSchema = Yup.object().shape({
    email: Yup.string().email("Введите корректный email."),
    phone: Yup.string(),
});
