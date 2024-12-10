import { useState } from "react";
import { styled } from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: #00000070;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;


/*
  The Modal component is a reusable component that can be used to display a modal window.
  This is a very simple implementation of a modal window, and it can be customized to 
  fit the needs of the application.

  The Modal component takes a single prop, children, which is the content that will be displayed
  inside the modal window. The modal window is displayed when the user clicks a button, and it is
  hidden when the user clicks outside the modal window or clicks a close button inside the modal window.

  The ModalContent have a onClick event that stops the propagation of the event for prevent clicks conflicts.

  Whe use a local state to control the visibility of the modal window. The state is initialized with a value of false,
  and it is set to true when the user clicks the button to show the modal window. The state is set to false when the user
  clicks outside the modal window or clicks the close button inside the modal window.
*/
export const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && (
        <ModalBackground onClick={() => setShow(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <button onClick={() => setShow(false)}>X</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};
