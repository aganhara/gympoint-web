import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Nav, SignOut } from './styles';

import logo from '../../assets/logo-header.png';

export default function Header() {
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
        <strong>Anderson Ganhara</strong>
        <button type="button">sair do sistema</button>
      </SignOut>
    </Container>
  );
}
