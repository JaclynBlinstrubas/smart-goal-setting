import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Main from "./components/Main";
import Users from "./components/Users";
import { Header } from "./components/headerStyle";
import { A } from "./components/aStyle";



function App(props) {

  return (
    <>
      <Header><A href='/'>S M A R T</A></Header>
      <main>
        <Route path="/" exact component={Main} />
        <Route path="/users" exact component={Users} />
      </main>
    </>
  );
};

export default App;
