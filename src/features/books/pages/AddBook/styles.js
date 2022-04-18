import styled from 'styled-components/macro';

import Page, { Content } from 'components/Page';
import Icon from 'components/Icon';

export const Button = styled.button`
  border: 1px solid #d6216b;
  border-radius: 20px;
  background: #fff;
  color: #d6216b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 150px;
  height: 40px;
`;

export const ErrorMessage = styled.div`
  color #d6216b;
margin-bottom: 1em;
font-size: 14px;
margin-top: -0.75em;
`;

export const StyledForm = styled.form`
  width: 400px;
  order: 2;
  & > input {
    border-radius: 6px;
    border: 1px solid #c0c6d9;
    width: 100%;
    height: 40px;
    font-size: 14px;
    margin-bottom: 1em;
    padding: 0 16px;
    &[data-error] {
      border-color: #d6216b;
    }
  }
  & > textarea {
    padding: 10px 16px;
    height: auto;
    border-radius: 6px;
    border: 1px solid #c0c6d9;
    width: 100%;
    font-size: 14px;
    margin-bottom: 1em;
    &[data-error] {
      border-color: #d6216b;
    }
  }
`;
export const Cover = styled.div`
  width: 240px;
  height: 360px;
  margin: 0 100px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;
  flex-direction: column;
  background-color: #e7ecf3;
  & > img {
    max-width: 100%;
    display: block;
  }
  ${Icon} {
    font-size: 40px;
    color: #7e89a9;
  }
`;

export const FormPage = styled(Page)`
  ${Content} {
    display: flex;
    flex-wrap: wrap;
  }
`;
