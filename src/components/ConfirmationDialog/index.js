import React from 'react';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';

export default function ConfirmationDialog({
  show,
  title,
  onConfirm,
  onCancel,
  message,
}) {
  return (
    <SweetAlert
      alert
      showCancel
      confirmBtnText="Confirmar"
      confirmBtnBsStyle="danger"
      show={show}
      title={title}
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      {message}
    </SweetAlert>
  );
}

ConfirmationDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
