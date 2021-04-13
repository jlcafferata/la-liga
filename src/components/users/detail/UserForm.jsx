import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import { useSelector } from "react-redux";
import { Error, ErrorMessageForm, InputField } from "../../../AppStyled";
import { Progress } from "../../commons/progress";
import { MainLoginContainer, UserDetailFormContainer } from "../UsersStyled";

const UserForm = ({ onFinish }) => {
  const { error, loading } = useSelector((state) => state.updateUser);

  const handleOnFinish = () => {
    onFinish();
  };

  return (
    <Container component="main" maxWidth="xs">
      <MainLoginContainer>
        <UserDetailFormContainer>
          {loading && <Progress />}
          <InputField type="id" name="id" disabled />
          <ErrorMessageForm name="id" component="div" />
          <InputField type="text" name="first_name" />
          <ErrorMessageForm name="first_name" component="div" />
          <InputField type="text" name="last_name" />
          <ErrorMessageForm name="last_name" component="div" />
          <InputField type="email" name="email" />
          <ErrorMessageForm name="email" component="div" />
          {error && <Error>{error}</Error>}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              disabled={loading}
              onClick={handleOnFinish}
            >
              Cancelar
            </Button>
            <Button type="submit" color="primary" disabled={loading}>
              Guardar
            </Button>
          </div>
        </UserDetailFormContainer>
      </MainLoginContainer>
    </Container>
  );
};

export default UserForm;
