import Container from "@material-ui/core/Container";
import React from "react";
import { Button } from "reactstrap";
import logo from "../assets/images/laLigaLogo.svg";

const Error = () => {
  return (
    <>
      <Container component="main">
        <img alt="La liga" src={logo} />
        Se produjo un error
        {
          //TODO implementar envio y recepcion de errores para mejor visualizacion de los mismos
        }
        <br />
        <Button href="/" color="primary" className="btn-shadow" size="lg">
          Volver
        </Button>
      </Container>
    </>
  );
};

export default Error;
