import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import FormNavigation from '~/components/FormNavigation';
import { Container, FormInput } from './styles';

export default function PlanForm({ match }) {
  useEffect(() => {
    const { planId } = match.params;
    console.log(planId);
  }, [match]);

  function handleSubmit() {
    console.log('handleSubmit');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <header>
          <h1>Cadastro de plano</h1>
          <FormNavigation />
        </header>
        <FormInput>
          <label>
            Título do Plano
            <Input id="name" name="name" />
          </label>

          <div>
            <label>
              Duração
              <Input id="duration" name="duration" type="number" min="1" />
            </label>
            <label>
              Preço
              <Input id="price" name="price" type="number" />
            </label>
            <label>
              Preço Total
              <Input id="totalPrice" name="totalPrice" type="number" />
            </label>
          </div>
        </FormInput>
      </Container>
    </Form>
  );
}
