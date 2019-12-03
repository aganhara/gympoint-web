import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, PlanList, EditButton } from './styles';

import api from '~/services/api';

export default function Plans() {
  const [help, setHelp] = useState([]);

  useEffect(() => {
    async function loadHelp() {
      const response = await api.get('students/help-orders');
      setHelp(response.data);
    }

    loadHelp();
  }, []);

  return (
    <Container>
      <header>
        <h1>Pedidos de auxílio</h1>
        <div>
          <button type="button">
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </button>
        </div>
      </header>
      <PlanList>
        <table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {help.map(order => (
              <tr key={order.id}>
                <td>{order.Student.name}</td>
                <td>
                  <EditButton>editar</EditButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </PlanList>
    </Container>
  );
}
