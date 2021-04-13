import { Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../redux/auth/actions";
import LoginForm from "./LoginForm";
import { validate } from "./validations";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { isAutenticated = false } =
    useSelector((state) => state.authUser) || {};

  useEffect(() => {
    if (isAutenticated) {
      history.push("/users");
    }
  }, [isAutenticated, history]);
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(loginUser(values));
        setSubmitting(false);
      }}
    >
      {({ props }) => <LoginForm {...props} />}
    </Formik>
  );
};

export default withRouter(Login);
