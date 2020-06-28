import React from 'react';
import {   BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeLayout from './components/layouts/HomeLayout';
import DashboardLayout from './components/layouts/DashboardLayout';
import AppRoute from './components/AppRoute/AppRoute';
import DailyDownload from './components/daily-download/DailyDownload';
import DailyPlan from './components/daily-download/daily-plan/DailyPlan';
import StudentList from './components/students/StudentList';

function App() {

  return (
      <Router>
        <Switch>
            <AppRoute path="/daily-plan" layout={HomeLayout} component={DailyPlan}/>
            <AppRoute path="/wizard-form/dashboard" layout={DashboardLayout} component={StudentList}/>
            <AppRoute path="/wizard-form" layout={HomeLayout} component={DailyDownload}/>
            <AppRoute path="/" layout={HomeLayout} component={DailyDownload}/>
        </Switch>
      </Router>
  );
}

export default App;
