export const validate = (values) => {
  const errors = {};
  if (!values.id) {
    errors.id = "El usuario debe tener id";
  }
  if (!values.first_name) {
    errors.first_name = "Debe ingresar nombre";
  }
  if (!values.last_name) {
    errors.last_name = "Debe ingresar apellido";
  }
  if (!values.email) {
    errors.email = "Debe ingresar email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Ingrese una dirección de email válida";
  }
  return errors;
};
