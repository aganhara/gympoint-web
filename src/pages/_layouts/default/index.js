import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  const {
    props: { location },
  } = children;
  return (
    <Wrapper>
      <Header currentPath={location.pathname} />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
