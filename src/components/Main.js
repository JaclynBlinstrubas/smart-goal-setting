import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";

const Main = () => {

        const [isOpen, setIsOpen] = React.useState(false);
    
        const showModal = () => {
            setIsOpen(true);
        }
    
        const hideModal = () => {
            setIsOpen(false);
        }

    return (
        <>
        <h3>
            SMART goal setting gives structure to your plan of achieving your goal.<br /><br />
            This type of goal setting also helps you track your progress and success rate throughout your journey.<br /><br />
            SMART goal setting provides you with a clear objective of your goal.<br /><br />
            You can use SMART goals for any goal you want to achieve, whether it is short-term, long-term, career-driven, or fitness-related.<br /><br />
        </h3>

        <button className="modal-button" onClick={showModal}>[ tap here to learn more ]</button>
        <Modal show={isOpen} onHide={hideModal}>
        <Modal.Title className="modal-title">S M A R T</Modal.Title>
            <Modal.Body>
                <p>
                    SPECIFIC<br /><br />
                    The more specific you are the more clear your steps will be to get there.<br /><br />
                    MEASURABLE<br /><br />
                    How are you going to track your imporovements and success?<br /><br />
                    ACHIEVABLE<br /><br />
                    Make a plan. Dreams become goals when there are plans attached to them.<br /><br />
                    RELEVENT<br /><br />
                    Make sure your goal is something you want to be working on.<br /><br />
                    TIMELY<br /><br />
                    Know how much time you need to accomplish your goals.<br /><br />
                </p>
            </Modal.Body>
        <button className="hide-modal" onClick={hideModal}>[ close ]</button>
</Modal><br />
        <a className="link-style" href="/ideas">[ tap here for examples & ideas ] </a>
    </>
    );
};

export default Main;