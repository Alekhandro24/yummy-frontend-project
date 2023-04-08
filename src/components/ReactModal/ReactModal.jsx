import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ModalContext from '../../utils';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modal-root');

export const ReactModal = ({ modalIsOpen, closeModal }) => {
  const { children } = React.useContext(ModalContext);
  //   let subtitle;

  //   console.log('React Modal modalIsOpen', modalIsOpen);

  //   const [modalIsOpen, setIsOpen] = React.useState(false);

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  return (
    <div>
      {/* <button onClick={openModal}>Open React Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={closeModal}>close</button> */}

        {children}
      </Modal>
    </div>
  );
};
