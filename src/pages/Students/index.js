import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

export default function Students() {
  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>
        <div>
          <button type="button">
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </button>
          <input type="text" name="Search" placeholder="Buscar aluno" />
        </div>
      </header>
    </Container>
  );
}
