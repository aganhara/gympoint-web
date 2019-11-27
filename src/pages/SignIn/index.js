import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '../../assets/logo.png';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSignIn({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Form onSubmit={handleSignIn}>
      <img src={logo} alt="Gympoint" />
      <label htmlFor="email">
        SEU E-MAIL
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="exemplo@email.com"
        />
      </label>
      <label htmlFor="password">
        SUA SENHA
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="********"
        />
      </label>
      <button type="submit">Entrar no sistema</button>
    </Form>
  );
}
