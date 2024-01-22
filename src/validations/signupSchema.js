import { object, string, ref } from "yup";

export const signupSchema = object({
  email: string().email("Ingrese un mail válido").required("Ingrese un mail"),
  password: string()
    .min(6, "La contraseña debe tener mínimo 6 carácteres")
    .required("Ingrese una contraseña"),
  confirmPassword: string()
    .oneOf([ref("password")], "Las contraseñas no coinciden")
    .required("Vuelva a ingresar el mail"),
});
