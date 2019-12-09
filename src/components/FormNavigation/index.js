import React from 'react';

import { MdNavigateBefore, MdDone } from 'react-icons/md';
import { Container } from './styles';

import history from '~/services/history';

export default function FormNavigation() {
  return (
    <Container>
      <button type="button" onClick={() => history.goBack()}>
        <MdNavigateBefore color="#fff" size={20} />
        Voltar
      </button>
      <button type="submit">
        <MdDone color="#fff" size={20} />
        Salvar
      </button>
    </Container>
  );
}
