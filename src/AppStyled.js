import { ErrorMessage } from "formik";
import styled from "styled-components";
import { Field } from "formik";

export const ErrorMessageForm = styled(ErrorMessage)`
  font-size: 0.8rem;
  color: grey;
  align-self: flex-end;
`;

export const Error = styled.div`
  color: red;
`;

export const InputField = styled(Field)`
height: 1.5rem;
border-radius: 8px;
border-color: lightgrey;
width: 14rem;
outline: none;
`