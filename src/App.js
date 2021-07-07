import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Main from "./components/Main";
import Users from "./components/Users";
import { HeaderStyle } from "./components/HeaderStyle";
import { A } from "./components/AStyle";
import Signup from "./components/Signup";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Ideas from "./components/Ideas";
import { Nav } from "react-bootstrap";
import { Button } from "./components/ButtonStyle"
import GoalForm from "./components/GoalForm";
import { NavBar } from "./components/NavStyle"
import GlobalStyles from "./components/GlobalStyle";


function App(props) {

  return (
    <>
      <HeaderStyle><A href='/'>S M A R T</A></HeaderStyle>
    

      <Nav className="nav" activeKey="/home">
      <Nav.Item>
          <Nav.Link href="/learn-more">What are SMART goals?</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/users">Your Account</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/ideas">Examples and Ideas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/form">Add your goals here!</Nav.Link>
        </Nav.Item>
      </Nav>

      

      <main>
        <Route path="/" exact component={Main} />
        <Route path="/users" exact component={Users} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/learn-more" exact component={Modal} />
        <Route path="/header" exact component={Header} />
        <Route path="/ideas" exact component={Ideas} />
        <Route path="/form" exact component={GoalForm} />
        <GlobalStyles/>
      </main>
    </>
  );
};

export default App;
