import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import FormNavigation from '~/components/FormNavigation';
import { Container, FormInput } from './styles';

export default function RegistrationForm({ match }) {
  useEffect(() => {
    const { studentId } = match.params;
    console.log(studentId);
  }, [match]);

  function handleSubmit() {
    console.log('Handle Matricula');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <header>
          <h1>Cadastro de matrícula</h1>
          <FormNavigation />
        </header>
        <FormInput>
          <label>
            Aluno
            <Input id="name" name="name" placeholder="Buscar aluno" />
          </label>

          <div>
            <label>
              Plano
              <Input id="plan" name="plan" />
            </label>
            <label>
              Data de início
              <Input id="start_date" name="start_date" />
            </label>
            <label>
              Data de término
              <Input id="end_date" name="end_date" />
            </label>
            <label>
              Valor final
              <Input id="totalPrice" name="totalPrice" type="number" />
            </label>
          </div>
        </FormInput>
      </Container>
    </Form>
  );
}
