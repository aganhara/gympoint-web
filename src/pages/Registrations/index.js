import React, { useState, useEffect } from 'react';
import { parseISO } from 'date-fns';
import { MdAdd, MdCheckCircle } from 'react-icons/md';

import { Container, PlanList, RemoveButton, EditButton } from './styles';

import api from '~/services/api';

import { formatDate } from '~/util/format';

export default function Plans() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    async function loadRegistrations() {
      const response = await api.get('registrations');
      setRegistrations(
        response.data.map(r => ({
          ...r,
          formattedStartDate: formatDate(parseISO(r.start_date)),
          formattedEndDate: formatDate(parseISO(r.end_date)),
        }))
      );
    }

    loadRegistrations();
  }, []);

  return (
    <Container>
      <header>
        <h1>Gerenciando matrículas</h1>
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
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration.id}>
                <td>{registration.Student.name}</td>
                <td>{registration.Plan.title}</td>
                <td>{registration.formattedStartDate}</td>
                <td>{registration.formattedEndDate}</td>
                <td>
                  <MdCheckCircle
                    size={20}
                    color={registration.active ? '#42CB59' : '#ddd'}
                  />
                </td>
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
