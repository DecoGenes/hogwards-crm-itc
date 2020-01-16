import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import Student from './components/Student';
import NewStudent from './components/NewStudent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route exact path='/students'>
            <StudentList />
          </Route>
          <Route path='/students/:studentId'>
            <Student />
          </Route>
          <Route path='/newstudent'>
            <NewStudent />
          </Route>
        </Switch>
      </Router>
    </header>
  </div >
  );
}

export default App;
