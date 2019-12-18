import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container, FormInput } from './styles';
import FormNavigation from '~/components/FormNavigation';

import api from '~/services/api';
import history from '~/services/history';

export default function StudentForm({ match }) {
  const [user, setUser] = useState({});

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    age: Yup.number().required('A idade é obrigatório'),
    weight: Yup.number().required('O peso é obrigatório'),
    height: Yup.number().required('A altura é obrigatório'),
    id: Yup.number(),
  });

  useEffect(() => {
    async function loadStudent() {
      const { studentId } = match.params;

      if (studentId) {
        const response = await api.get(`/students/${studentId}`);
        setUser(response.data);
      }
    }

    loadStudent();
  }, [match]);

  async function handleAddStudent(data) {
    try {
      await api.post('/students', data);

      toast.success('Novo aluno adicionado com sucesso');

      history.push('/students');
    } catch (err) {
      toast.error('Não foi possível adicionar o novo aluno');
    }
  }

  async function handleUpdateStudent(data) {
    try {
      const { id, name, email, age, weight, height } = data;
      await api.put(`/students/${id}`, {
        name,
        email,
        age,
        weight,
        height,
      });

      toast.success('Dados do aluno atualizado com sucesso');
      history.push('/students');
    } catch (err) {
      toast.error('Não foi possível atualizar os dados do aluno');
    }
  }

  return (
    <Form
      schema={schema}
      initialData={user}
      onSubmit={user.id ? handleUpdateStudent : handleAddStudent}
    >
      <Container>
        <header>
          <h1>Cadastro de aluno</h1>
          <FormNavigation />
        </header>
        <FormInput>
          {user.id && <Input id="id" name="id" type="hidden" />}
          <label>
            NOME COMPLETO
            <Input id="name" name="name" placeholder="John Doe" />
          </label>
          <label>
            ENDEREÇO DE E-MAIL
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="John Doe"
            />
          </label>

          <div>
            <label>
              IDADE
              <Input id="age" name="age" type="number" min="1" />
            </label>
            <label>
              PESO (em Kg)
              <Input id="weight" name="weight" type="number" step="0.1" />
            </label>
            <label>
              ALTURA
              <Input id="height" name="height" type="number" step="0.01" />
            </label>
          </div>
        </FormInput>
      </Container>
    </Form>
  );
}

StudentForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      studentId: PropTypes.string,
    }),
  }).isRequired,
};
