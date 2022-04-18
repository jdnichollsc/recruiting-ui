import { Link } from '@reach/router';
import styled from 'styled-components/macro';

import Icon from '../Icon';

export const Brandmark = styled(Icon).attrs(() => ({ icon: 'book-open' }))`
  color: #593ca2;
  margin: 16px;
  font-size: 40px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  color: #394455;
  vertical-align: middle;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #593ca2;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 5px;
  margin-left: 50px;
`;

export const BannerWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 130px;
  width: 1200px;
  margin: 0 auto;
`;
