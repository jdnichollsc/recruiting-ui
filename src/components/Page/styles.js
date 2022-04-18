import styled from 'styled-components/macro';
import { Link } from '@reach/router';

export const Wrapper = styled.div`
  width: 100%;
  font-family: Palatino, serif;
`;

export const Headline = styled.div`
  background: linear-gradient(180deg, #583ba2 0, #823aa5 100%);
  width: 100%;
  min-height: 40px;
  & > h1 {
    line-height: 90px;
    font-size: 36px;
    color: #fff;
    text-align: center;
    font-family: Palatino, Times, serif;
    font-weight: 700;
  }
`;

export const Filters = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Source Sans Pro', 'Appcues-Roboto', Arial, sans-serif;
  & > * {
    margin-right: 50px;
  }
`;

export const FlexGroup = styled.div`
  display: flex;
`;

export const ViewLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: #7e89a9;
`;

export const ActiveLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background-color: #f5f7fa;
  color: #593ca2;
`;

export const Content = styled.div`
  width: 1080px;
  margin: 0 auto;
`;
