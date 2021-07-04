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
                <Modal.Body>
                    <p>
                        SPECIFIC<br />
                        The more specific you are the more clear your steps will be to get there.<br />
                        MEASURABLE<br />
                        How are you going to track your imporovements and success?<br />
                        ACHIEVABLE<br />
                        Make a plan. Dreams become goals when there are plans attached to them.<br />
                        RELEVENT<br />
                        Make sure your goal is something you want to be working on.<br />
                        TIMELY<br />
                        Know how much time you need to accomplish your goals.<br />
                    </p>
                </Modal.Body>
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