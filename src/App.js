import React from 'react';
import Modal from './components/Modal/Modal';
import DailyDownload from './components/daily-download/DailyDownload';
import DailyPlan from './components/daily-download/daily-plan/DailyPlan';
import logo from './assets/img/logo.png';
import {   BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  function handleShowModal() {
    setModalShow(true);
  }

  function handleCloseModal() {
    setModalShow(false);
  }

  return (
      <Router>
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

            <Switch>
              <Route path="/daily-plan">
                <DailyPlan />
              </Route>
              <Route path="/">
                <DailyDownload />
              </Route>
            </Switch>

          </div>
        </div>
      </Router>
  );
}

export default App;
