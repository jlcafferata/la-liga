import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useSelector } from "react-redux";
import { Error, ErrorMessageForm, InputField } from "../../AppStyled";
import logo from "../../assets/images/laLigaLogo.svg";
import { Progress } from "../../components/commons/progress";
import { FormLoginContainer, MainLoginContainer } from "./LoginFormStyled";

const LoginForm = () => {
  const { error, loading } = useSelector((state) => state.authUser);
  return (
    <Container component="main" maxWidth="xs">
      <MainLoginContainer>
        <img alt="La liga" src={logo} />
        {loading && <Progress />}
        <Typography component="h1" variant="h5">
          Control de acceso
        </Typography>
        <FormLoginContainer>
          <InputField type="email" name="email" />
          <ErrorMessageForm name="email" component="div" />
          <InputField type="password" name="password" />
          <ErrorMessageForm name="password" component="div" />
          <Error>{error}</Error>
          <div style={{ display:"flex", flexDirection:"row" }}>
            <Button
              type="reset"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" color="primary" disabled={loading}>
              Acceder
            </Button>
          </div>
        </FormLoginContainer>
      </MainLoginContainer>
    </Container>
  );
};

export default LoginForm;
