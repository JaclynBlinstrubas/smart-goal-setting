import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Users from "./components/Users";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Header from "./components/Header";
import CreateGoalForm from "./components/CreateGoalForm";
import Login from "./components/Login";
import Ideas from './components/Ideas';




function App(props) {

  return (
    <>
      <header className="header">
        <a href='/'>S M A R T</a>
      </header>
    
      {/* <div className="navbar">
        <ul className="nav" activeKey="/home">
            <a href="/form">Add your goals here!</a>
        </ul>
      </div> */}

      
{/* <A href="/login">Login</A>
<A href="/signup">Sign Up</A>
<A href="/users">Your Account</A>
       */}

      <main>
        <Route path="/" exact component={Main} />
        <Route path="/users" exact component={Users} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/header" exact component={Header} />
        <Route path="/form" exact component={CreateGoalForm} />
        <Route path="/login" exact component={Login} />
        <Route path="/ideas" exact component={Ideas} />
      </main>
    </>
  );
};

export default App;
