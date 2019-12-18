import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import { addMonths, parseISO } from 'date-fns';
import Select from '~/components/ReactSelect';
import DatePicker from '~/components/DatePicker';
import FormNavigation from '~/components/FormNavigation';
import { Container, FormInput } from './styles';

import api from '~/services/api';
import { formatPrice, formatSimpleDate } from '~/util/format';

export default function RegistrationForm({ history }) {
  const schema = Yup.object().shape({
    student_id: Yup.number('Selecione um aluno').required(),
    plan_id: Yup.number('Selecione um aluno').required(),
    start_date: Yup.date().required('Selecione uma data'),
    id: Yup.number(),
  });

  const { registration } = history.location.state;

  const [student] = useState(
    registration
      ? {
          value: registration.student_id,
          label: registration.Student.name,
        }
      : null
  );

  const [plan, setPlan] = useState(
    registration
      ? {
          value: registration.plan_id,
          label: registration.Plan.title,
          duration: registration.Plan.duration,
          price: registration.Plan.price,
        }
      : null
  );

  const [initialData] = useState({
    id: registration ? registration.id : null,
    student: registration ? registration.student_id : '',
    plan: registration ? registration.plan_id : '',
    start_date: registration ? parseISO(registration.start_date) : new Date(),
  });

  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);
  const [startDate, setStartDate] = useState(
    registration ? registration.start_date : new Date()
  );

  const endDate = useMemo(
    () =>
      plan && startDate
        ? formatSimpleDate(addMonths(new Date(startDate), plan.duration))
        : '',
    [plan, startDate]
  );

  const finalPrice = useMemo(
    () => (plan && startDate ? formatPrice(plan.price * plan.duration) : ''),
    [plan, startDate]
  );

  async function loadStudents() {
    const response = await api.get('/students');
    setStudents(
      response.data.map(s => ({
        value: s.id,
        label: s.name,
      }))
    );
  }

  async function loadPlans() {
    const response = await api.get('/plans');

    setPlans(
      response.data.map(p => ({
        value: p.id,
        label: p.title,
        duration: p.duration,
        price: p.price,
      }))
    );
  }

  useEffect(() => {
    loadStudents();
    loadPlans();
  }, []);

  async function handleAddRegistration(data) {
    try {
      const { student_id, plan_id, start_date } = data;

      await api.post('/registrations', { student_id, plan_id, start_date });
      toast.success('Nova matrícula cadastrada com sucesso');
      history.push('/registrations');
    } catch (error) {
      toast.error('Não foi possível adicionar nova matrícula');
    }
  }

  async function handleUpdateRegistration(data) {
    try {
      const { student_id, plan_id, start_date } = data;

      await api.put(`/registrations/${student_id}`, {
        plan_id,
        start_date,
      });
      toast.success('Matrícula atualizada com sucesso');
      history.push('/registrations');
    } catch (error) {
      toast.error('Não foi possível atualizar a matrícula');
    }
  }

  return (
    <Form
      schema={schema}
      onSubmit={registration ? handleUpdateRegistration : handleAddRegistration}
      initialData={initialData}
    >
      <Container>
        <header>
          <h1>
            {registration
              ? 'Atualização de matrícula'
              : 'Cadastro de matrícula'}
          </h1>
          <FormNavigation />
        </header>
        <FormInput>
          {registration && <Input type="hidden" name="id" />}
          <label>
            ALUNO
            <Select
              name="student_id"
              options={students}
              defaultValueSelected={student}
              placeholder="Selecione o aluno"
            />
          </label>
          <div>
            <label>
              PLANO
              <Select
                name="plan_id"
                options={plans}
                defaultValueSelected={plan}
                callback={value => setPlan(value)}
                placeholder="Selecione o plano"
              />
            </label>
            <label>
              DATA DE INÍCIO
              <DatePicker
                name="start_date"
                callback={date => setStartDate(date)}
                placeholder="Seleciona a data de início"
              />
            </label>
            <label>
              DATA DE TÉRMINO
              <input name="end_date" readOnly value={endDate} />
            </label>
            <label>
              VALOR FINAL
              <input name="final_price" readOnly value={finalPrice} />
            </label>
          </div>
        </FormInput>
      </Container>
    </Form>
  );
}

RegistrationForm.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({
        registration: PropTypes.object,
      }),
    }),
    push: PropTypes.func.isRequired,
  }).isRequired,
};
