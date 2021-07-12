import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Users from "./components/Users";
import Signup from "./components/Signup";
import Main from "./components/Main";
import CreateGoalForm from "./components/CreateGoalForm";
import Login from "./components/Login";
import Ideas from './components/Ideas';




function App(props) {

  return (
    <>
      <header className="header">
        <a href='/'>S M A R T</a>
      </header>

      <div className="navbar">
        <a href="/signup">[ sign up ]</a><br />
        <a href="/login">[ login ]</a>
      </div>


      <main>
        <Route path="/" exact component={Main} />
        <Route path="/users" exact component={Users} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/form" exact component={CreateGoalForm} />
        <Route path="/login" exact component={Login} />
        <Route path="/ideas" exact component={Ideas} />
      </main>
    </>
  );
};

export default App;
