import { object, string, ref } from "yup";

export const signupSchema = object({
  email: string().email("Ingrese un mail válido").required("Ingrese su mail"),
  /*   name: string().required("Ingrese su nombre"), */
  password: string()
    .min(6, "La contraseña debe tener mínimo 6 carácteres")
    .required("Ingrese una contraseña"),
  confirmPassword: string()
    .required("Debe confirmar la contraseña")
    .oneOf([ref("password")], "Las contraseñas no coinciden"),
});
