import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import ConfirmationDialog from '~/components/ConfirmationDialog';

import { Container, PlanList, RemoveButton, EditButton } from './styles';

import api from '~/services/api';
import { formatPrice } from '~/util/format';

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const [planIdForRemove, setPlanIdForRemove] = useState();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

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
  useEffect(() => {
    loadPlans();
  }, []);

  async function handleDeletePlan(planId) {
    try {
      await api.delete(`/plans/${planId}`);
      toast.success('Plano removido com sucesso');
      loadPlans();
    } catch (err) {
      toast.error('Não foi possível remover o plano');
    }
    setShowConfirmDelete(false);
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando planos</h1>
        <div>
          <Link to="/plans/form">
            <button type="button">
              <MdAdd size={20} color="#fff" />
              CADASTRAR
            </button>
          </Link>
        </div>
      </header>
      <ConfirmationDialog
        message="Deseja remover o plano?"
        show={showConfirmDelete}
        title="Confirmar Remoção"
        onConfirm={() => handleDeletePlan(planIdForRemove)}
        onCancel={() => setShowConfirmDelete(false)}
      />
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
                  <Link to={{ pathname: `/plans/form/${plan.id}` }}>
                    <EditButton>editar</EditButton>
                  </Link>
                  <RemoveButton
                    onClick={() => {
                      setShowConfirmDelete(true);
                      setPlanIdForRemove(plan.id);
                    }}
                  >
                    apagar
                  </RemoveButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </PlanList>
    </Container>
  );
}
