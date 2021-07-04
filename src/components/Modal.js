import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import { ModalShowButton } from "./ModalStyle";

const SMARTmodal = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }


    return (
        <>
            <button onClick={showModal}>tap here to learn more</button>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>S M A R T</Modal.Title>
                </Modal.Header>
                <Modal.Body>SMART info goes here, yo.</Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>close</button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<SMARTmodal />, rootElement);

export default SMARTmodal;