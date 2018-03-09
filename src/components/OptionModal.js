import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    //press esc or click background will trigger the function below
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Select Option"
    closeTimeoutMS = {500}
    className = "modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>

);

export default OptionModal;