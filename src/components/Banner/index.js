import React from 'react';
import { navigate } from '@reach/router';
import { BannerWrapper, Logo, Brandmark, StyledLink } from './styles';

export default function Banner() {
  return (
    <BannerWrapper>
      <Logo onClick={() => navigate('/')}>
        <Brandmark />
        Bookcues
      </Logo>
      <StyledLink to="saved">Saved Books</StyledLink>
    </BannerWrapper>
  );
}
