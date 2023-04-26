import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const productSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string(),
  price: Yup.string().matches(/[+-]?([0-9]*[.])?[0-9]+/, "Must be only digits").required("Required"),
});
