import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Users from "./components/Users";
import { Header } from "./components/Header.style";
import { A } from "./components/A.style";



function App(props) {

  return (
    <>
      <Header><A href='/'>S M A R T</A></Header>
      <main>
        <Route path="/user_account" exact component={Users} />
      </main>
    </>
  );
};

export default App;
