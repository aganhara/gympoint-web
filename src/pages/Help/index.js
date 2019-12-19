import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import AnswerDialog from './AnswerDialog';
import { Container, PlanList, AnswerButton } from './styles';

import api from '~/services/api';

export default function Plans() {
  const [help, setHelp] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({});

  const [showDialog, setShowDialog] = useState(false);

  async function loadHelp() {
    const response = await api.get('students/help-orders');
    setHelp(response.data);
  }

  useEffect(() => {
    loadHelp();
  }, []);

  async function handleOrderAnswer(order) {
    setSelectedOrder(order);
    setShowDialog(!showDialog);
  }

  async function handleConfirmation(data) {
    try {
      const { id, answer } = data;
      await api.put(`/help-orders/${id}/answer`, { answer });
      setShowDialog(false);
      toast.success('Resposta salva com sucesso');
      loadHelp();
    } catch (error) {
      toast.error('Não foi possível salvar a resposta');
    }
  }

  return (
    <Container>
      <header>
        <h1>Pedidos de auxílio</h1>
      </header>
      <PlanList>
        <AnswerDialog
          showDialog={showDialog}
          onConfirm={handleConfirmation}
          order={selectedOrder}
          title="PERGUNTA DO ALUNO"
          onCancel={() => setShowDialog(false)}
        />
        {help && help.length > 0 ? (
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
                    <AnswerButton onClick={() => handleOrderAnswer(order)}>
                      responder
                    </AnswerButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Nenhum pedido de auxílio pendente de resposta.</div>
        )}
      </PlanList>
    </Container>
  );
}
