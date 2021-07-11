import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Users from "./components/Users";
import { A } from "./components/AStyle";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Header from "./components/Header";
import { Button } from "./components/ButtonStyle"
import CreateGoalForm from "./components/CreateGoalForm";
import Login from "./components/Login";
import Ideas from "./components/Ideas";




function App(props) {

  return (
    <>
      <header className="header">
        <A href='/'>S M A R T</A>
      </header>
    

      <ul className="nav" activeKey="/home">
          <A href="/learn-more">What are SMART goals?</A>
          <A href="/ideas">Examples and Ideas</A>
          <A href="/form">Add your goals here!</A>
      </ul>

      
{/* <A href="/login">Login</A>
<A href="/signup">Sign Up</A>
<A href="/users">Your Account</A>
       */}

      <main>
        <Route path="/" exact component={Main} />
        <Route path="/users" exact component={Users} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/header" exact component={Header} />
        <Route path="/ideas" exact component={Ideas} />
        <Route path="/form" exact component={CreateGoalForm} />
        <Route path="/login" exact component={Login} />
      </main>
    </>
  );
};

export default App;
