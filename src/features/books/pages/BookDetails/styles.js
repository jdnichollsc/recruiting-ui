import styled from 'styled-components/macro';
import { SaveButton } from 'components/Buttons';
import Icon from 'components/Icon';
import Page from 'components/Page';

export const Cover = styled.div`
  width: 240px;
  height: 360px;
  margin: 0 100px 18px 0;
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

export const Author = styled.p`
  font-size: 18px;
  color: #717883;
`;

export const StyledPage = styled(Page)`
  h1,
  h2 {
    margin-bottom: 8px;
  }

  h1 {
    text-transform: capitalize;
  }

  p {
    margin-top: 0;
    color: #69707b;
  }

  & > div:nth-of-type(2) > div:first-child {
    float: left;
  }
`;

export const Detail = styled.div`
  margin-bottom: 6px;
  color: #69707b;

  strong {
    color: black;
  }
`;

export const StyledSaveButton = styled(SaveButton)`
  margin-left: ${({ saved }) => (saved ? '71.25px' : '45px')};
  margin-top: ${({ saved }) => (saved ? '28.5px' : '0')};
`;
