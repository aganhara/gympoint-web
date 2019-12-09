import React, { useState, useEffect } from 'react';

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
                  <EditButton>responder</EditButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </PlanList>
    </Container>
  );
}
