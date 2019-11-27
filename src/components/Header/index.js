import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Nav, SignOut } from './styles';

import logo from '~/assets/logo-header.png';

export default function Header() {
  const { profile } = useSelector(state => state.user);
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
          <Link to="/">MATRÍCULA</Link>
        </li>
        <li>
          <Link to="/">PEDIDOS DE AUXÍLIOS</Link>
        </li>
      </Nav>
      <SignOut>
        <strong>{profile.name}</strong>
        <button type="button">sair do sistema</button>
      </SignOut>
    </Container>
  );
}
