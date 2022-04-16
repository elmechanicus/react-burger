import React from 'react';
import PropTypes from 'prop-types';
import overlayStyle from './modalOverlay.module.css';

function ModalOverlay({onCloseClick}) {
  return (
    <div className={overlayStyle.popupBackground} onClick={onCloseClick}></div>
  )
}

ModalOverlay.propTypes = {
  onCloseClick: PropTypes.func.isRequired
}

export default ModalOverlay
