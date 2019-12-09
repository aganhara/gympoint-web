import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container, FormInput } from './styles';
import FormNavigation from '~/components/FormNavigation';

export default function StudentForm({ match }) {
  useEffect(() => {
    const { userId } = match.params;
    console.log(userId);
  }, [match]);

  function handleSubmit() {
    console.log('Submit');
  }

  return (
    <Form onSubmit={handleSubmit}>
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
              <Input id="weight" name="weight" type="number" />
            </label>
            <label>
              Altura
              <Input id="height" name="height" type="number" />
            </label>
          </div>
        </FormInput>
      </Container>
    </Form>
  );
}
