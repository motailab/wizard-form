import React from 'react';
import Modal from '../../components/Modal/Modal';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

export default function HomeLayout({ children }) {
    const [modalShow, setModalShow] = React.useState(false);

    function handleShowModal() {
      setModalShow(true);
    }
  
    function handleCloseModal() {
      setModalShow(false);
    }

    
    return (
        <div  className="container">
            <div className="header">
              <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button className="absbtn" onClick={handleShowModal}><i className="fas fa-question-circle "></i></button>
                <Modal  
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  closeModal={handleCloseModal}/>
              </div>
              {children}
            </div>
        </div>
    );
};
