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
      warning
      showCancel
      confirmBtnText="Confirmar"
      show={show}
      title={title}
      onConfirm={onConfirm}
      onCancel={onCancel}
      focusCancelBtn
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
