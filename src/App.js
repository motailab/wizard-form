import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import Modal from './Modal/Modal';

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  function handleShowModal() {
    setModalShow(true);
  }

  function handleCloseModal() {
    setModalShow(false);
  }

  return (
    <Container>
      <Row>
        <Col>
          <button class="absbtn" onClick={handleShowModal}><i class="fas fa-question-circle "></i></button>
          <Modal  
            show={modalShow}
            onHide={() => setModalShow(false)}
            closeModal={handleCloseModal}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
