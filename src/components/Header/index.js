import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Nav, SignOut } from './styles';

import logo from '~/assets/logo-header.png';

export default function Header({ currentPath }) {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  function handleClassName(pathname) {
    return pathname === currentPath ? 'active' : '';
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <img src={logo} alt="Gympoint" />
      <Nav>
        <li>
          <Link to="/students" className={handleClassName('/students')}>
            ALUNOS
          </Link>
        </li>
        <li>
          <Link to="/plans" className={handleClassName('/plans')}>
            PLANOS
          </Link>
        </li>
        <li>
          <Link
            to="/registrations"
            className={handleClassName('/registrations')}
          >
            MATRÍCULA
          </Link>
        </li>
        <li>
          <Link to="/help" className={handleClassName('/help')}>
            PEDIDOS DE AUXÍLIOS
          </Link>
        </li>
      </Nav>
      <SignOut>
        <strong>{profile.name}</strong>
        <button type="button" onClick={handleSignOut}>
          sair do sistema
        </button>
      </SignOut>
    </Container>
  );
}

Header.propTypes = {
  currentPath: PropTypes.string.isRequired,
};
