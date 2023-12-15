import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const WrapperForm = styled(Form)`
  width: 300px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  background-color: lightblue;

  label {
    display: block;
  }
  span {
    display: block;

    margin-bottom: 5px;
    font-weight: 500;
  }
  label: nth-of-type(2) span {
    margin-top: 15px;
  }
`;

export const Input = styled(Field)`
  display: block;
`;

export const FormBtn = styled.button`
  margin-top: 15px;
  border-radius: 4px;
  padding: 4px 10px;
  border-color: cyan;
  cursor: pointer;

  &:active {
    background-color: aqua;
  }
`;

export const ErrorText = styled.div`
  color: red;
`;
