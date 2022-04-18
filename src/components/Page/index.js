import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import {
  Wrapper,
  Headline,
  Content,
  Filters,
  FlexGroup,
  ActiveLink,
  ViewLink,
} from './styles';

export * from './styles';

export default function Page({ className, pageTitle, filters, children }) {
  const [, view] = window.location.search.match(/view=(grid|list)/) || [];
  return (
    <Wrapper className={className}>
      <Headline>{pageTitle ? <h1>{pageTitle}</h1> : ''}</Headline>
      <Content>
        {filters && (
          <Filters>
            {filters}{' '}
            {view === 'list' ? (
              <FlexGroup>
                <ActiveLink>
                  <Icon icon="th-list" />
                </ActiveLink>
                <ViewLink to="?view=grid">
                  <Icon icon="th" />
                </ViewLink>{' '}
              </FlexGroup>
            ) : (
              <FlexGroup>
                <ViewLink to="?view=list">
                  <Icon icon="th-list" />
                </ViewLink>
                <ActiveLink>
                  <Icon icon="th" />
                </ActiveLink>
              </FlexGroup>
            )}
          </Filters>
        )}
        {children}
      </Content>
    </Wrapper>
  );
}

Page.propTypes = {
  className: PropTypes.string,
  pageTitle: PropTypes.string,
  filters: PropTypes.node,
  children: PropTypes.node,
};
