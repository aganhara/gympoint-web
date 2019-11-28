import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, PlanList, RemoveButton, EditButton } from './styles';

import api from '~/services/api';
import { formatPrice } from '~/util/format';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      setPlans(
        response.data.map(p => ({
          ...p,
          formattedPrice: formatPrice(p.price),
          durationLabel: `${p.duration} ${p.duration === 1 ? 'Mês' : 'Meses'}`,
        }))
      );
    }

    loadPlans();
  }, []);

  return (
    <Container>
      <header>
        <h1>Gerenciando planos</h1>
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
              <th>TÍTULO</th>
              <th>DURAÇÃO</th>
              <th>VALOR p/ MÊS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>{plan.durationLabel}</td>
                <td>{plan.formattedPrice}</td>
                <td>
                  <EditButton>editar</EditButton>
                  <RemoveButton>apagar</RemoveButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </PlanList>
    </Container>
  );
}
