import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container, FormInput } from './styles';
import FormNavigation from '~/components/FormNavigation';

import api from '~/services/api';
import history from '~/services/history';

export default function StudentForm({ match }) {
  const [user, setUser] = useState({});

  const schema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório"),
    email: Yup.string().email("Insira um e-mail válido").required("O e-mail é obrigatório"),
    age: Yup.number("Insira um valor válido").required("A idade é obrigatório"),
    weight: Yup.number().required("O peso é obrigatório"),
    height: Yup.number().required("A altura é obrigatório"),
  });

  useEffect(() => {
    const { userId } = match.params;


    console.log(userId);
  }, [match]);

  async function handleSubmit(data) {
    const response = await api.post('/students', data);
    console.log(response);

    history.push('/students');
  }

  return (
    <Form schema={schema} initialData={user} onSubmit={handleSubmit}>
      <Container>
        <header>
          <h1>Cadastro de aluno</h1>
          <FormNavigation />
        </header>
        <FormInput>
          <label>
            Nome Completo
            <Input id="name" name="name" placeholder="John Doe" />
          </label>
          <label>
            E-mail
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="John Doe"
            />
          </label>

          <div>
            <label>
              Idade
              <Input id="age" name="age" type="number" min="1" />
            </label>
            <label>
              Peso
              <Input id="weight" name="weight" type="number" step="0.1" />
            </label>
            <label>
              Altura
              <Input id="height" name="height" type="number" step="0.1" />
            </label>
          </div>
        </FormInput>
      </Container>
    </Form>
  );
}
