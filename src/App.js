import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Main from "./components/Main";
import Users from "./components/Users";
import { Header } from "./components/HeaderStyle";
import { A } from "./components/AStyle";
import Signup from "./components/Signup";
import Modal from "./components/Modal";



function App(props) {

  return (
    <>
    <Header><A href='/'>S M A R T</A></Header>
    <main>
        <Route path="/" exact component={Main} />
        <Route path="/users" exact component={Users} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/smart-modal" exact component={Modal} />
      </main>
    </>
  );
};

export default App;
