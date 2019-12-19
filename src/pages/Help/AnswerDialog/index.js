import React from 'react';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';

import { Title, Subtitle, Question, Answer } from './styles';

export default function AnswerDialog({
  showDialog,
  onConfirm,
  onCancel,
  order,
  title,
}) {
  return (
    <SweetAlert
      input
      placeholder="Digite sua resposta aqui"
      inputType="textarea"
      defaultValue={order.answer}
      customClass="answer-dialog"
      show={showDialog}
      title={<Title>{title}</Title>}
      onConfirm={response => {
        const { id } = order;
        onConfirm({ id, answer: response });
      }}
      onCancel={onCancel}
      confirmBtnText="Responder aluno"
    >
      <Question>
        <span>{order.question}</span>
      </Question>

      <Answer>
        <Subtitle>SUA RESPOSTA</Subtitle>
      </Answer>
    </SweetAlert>
  );
}

AnswerDialog.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    answer: PropTypes.string,
    question: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  showDialog: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
