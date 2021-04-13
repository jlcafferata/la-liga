export const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Debe ingresar email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Ingrese una dirección de email válida";
  }
  if (!values.password) {
    errors.password = "Debe ingresar password";
  }
  return errors;
};
