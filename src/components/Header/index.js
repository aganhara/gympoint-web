import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Nav, SignOut } from './styles';

import logo from '~/assets/logo-header.png';

export default function Header() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <img src={logo} alt="Gympoint" />
      <Nav>
        <li>
          <Link to="/students">ALUNOS</Link>
        </li>
        <li>
          <Link to="/plans">PLANOS</Link>
        </li>
        <li>
          <Link to="/registrations">MATRÍCULA</Link>
        </li>
        <li>
          <Link to="/">PEDIDOS DE AUXÍLIOS</Link>
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
