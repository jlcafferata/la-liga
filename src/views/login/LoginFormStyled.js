import { Form } from "formik";
import styled from "styled-components";

export const MainLoginContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const FormLoginContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 8rem;
  justify-content: space-around;
  padding: 1.5rem;
  align-items: center;
`;

