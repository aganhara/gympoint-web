import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import FormNavigation from '~/components/FormNavigation';
import { Container, FormInput } from './styles';
import api from '~/services/api';
import history from '~/services/history';
import { formatPrice } from '~/util/format';

export default function PlanForm({ match }) {
  const [formDuration, setDuration] = useState(0);
  const [formPrice, setPrice] = useState(0);
  const [totalPrice, settotalPrice] = useState(0);
  const [plan, setPlan] = useState({});

  const schema = Yup.object().shape({
    title: Yup.string().required('O título do plano é requerido'),
    duration: Yup.number()
      .min(1)
      .required('A duração do plano é requerida'),
    price: Yup.number()
      .min(1)
      .required('A price do plano é requerida'),
  });

  useEffect(() => {
    async function loadPlan() {
      const { planId } = match.params;

      if (planId) {
        const response = await api.get(`/plans/${planId}`);
        setPlan(response.data);
        const { price, duration } = response.data;
        setPrice(price);
        setDuration(duration);
      }
    }

    loadPlan();
  }, [match.params]);

  useEffect(() => {
    if (formDuration && formPrice) {
      settotalPrice(formatPrice(formDuration * formPrice));
    }
  }, [formDuration, formPrice]);

  async function handleAddNewPlan(data) {
    const { title, duration, price } = data;
    try {
      await api.post('/plans', { title, duration, price });
      toast.success('Novo plano cadastrado com sucesso');
      history.push('/plans');
    } catch (err) {
      toast.error('Não foi possível adicionar o novo plano');
    }
  }

  async function handleUpdatePlan(data) {
    const { title, duration, price } = data;
    try {
      await api.put(`/plans/${plan.id}`, {
        id: plan.id,
        title,
        duration,
        price,
      });
      toast.success('Plano atualizado com sucesso');
      history.push('/plans');
    } catch (err) {
      toast.error('Não foi possível atualizar o plano');
    }
  }

  return (
    <Form
      initialData={plan}
      onSubmit={plan.id ? handleUpdatePlan : handleAddNewPlan}
      schema={schema}
      context={{ formDuration, formPrice }}
    >
      <Container>
        <header>
          <h1>Cadastro de plano</h1>
          <FormNavigation />
        </header>
        <FormInput>
          <label>
            Título do Plano
            <Input id="title" name="title" />
          </label>

          <div>
            <label>
              Duração
              <Input
                id="duration"
                name="duration"
                type="number"
                min="1"
                onChange={e => {
                  setDuration(e.target.value);
                }}
              />
            </label>
            <label>
              Preço
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                onChange={e => {
                  setPrice(e.target.value);
                }}
              />
            </label>
            <label>
              Preço Total
              <input
                id="totalPrice"
                name="totalPrice"
                value={totalPrice}
                readOnly
              />
            </label>
          </div>
        </FormInput>
      </Container>
    </Form>
  );
}
