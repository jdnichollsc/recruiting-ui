import styled from 'styled-components/macro';

import Icon from '../Icon';

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
  ${Icon} {
    font-size: 0.75em;
    margin-top: 1px;
    margin-right: 8px;
  }
`;

export const TextButton = styled.button`
  border: none;
  background: none;
  color: #1eb5c4;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Icon} {
    font-size: 0.75em;
    margin-top: 1px;
    margin-right: 8px;
  }
`;
