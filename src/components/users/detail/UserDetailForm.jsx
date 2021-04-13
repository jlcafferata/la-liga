import { Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateUser, resetFlags } from "../../../redux/updateUser/actions";
import { validate } from "../validations";
import UserForm from "./UserForm";

const UserDetailForm = ({ user, onFinish }) => {
  const { loading = false, error = "", isUpdated = false } = useSelector(
    (state) => state.updateUser
  );
  const dispatch = useDispatch();

  const handleOnFinish = async () => {
    dispatch(resetFlags());
    onFinish();
  };

  useEffect(() => {
    if (!loading && !error && isUpdated) {
      handleOnFinish();
    }
  }, [loading, error, isUpdated]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        id: user?.id,
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(updateUser(values));
        setSubmitting(false);
      }}
    >
      {() => <UserForm onFinish={handleOnFinish} />}
    </Formik>
  );
};

export default withRouter(UserDetailForm);
