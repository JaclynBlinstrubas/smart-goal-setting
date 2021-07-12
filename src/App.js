import './App.css';
import React, { useState } from "react";
import { Route } from "react-router-dom";
import Users from "./components/Users";
import Signup from "./components/Signup";
import Main from "./components/Main";
import CreateGoalForm from "./components/CreateGoalForm";
import Login from "./components/Login";
import Ideas from './components/Ideas';

function App(props) {

  const [formData, setFormData] = useState("hello")

  return (
    <>
      <header className="header">
        <a href='/'>S M A R T</a>
      </header>

      <div className="navbar">
        <a href="/signup">[ sign up ]</a><br />
        <a href="/login">[ login ]</a>
      </div>

        <Route path="/" exact component={Main} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/ideas" exact component={Ideas} />
        <Route exact path="/form" render={routerprops => 
            <CreateGoalForm routerprops={routerprops} formData={formData} setFormData={setFormData}/>}/>
        <Route exact path="/users" render={routerprops => 
            <Users routerprops={routerprops} formData={formData} setFormData={setFormData}/>}/>
    </>
  );
};

export default App;
