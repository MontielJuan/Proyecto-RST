import Formm from './components/Formm'
import "bootstrap/dist/css/bootstrap.min.css";
/*
import React, { Component } from 'react';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';*/
//import { Coin } from 'react-bootstrap-icons';
//<Coin size={32} className="d-inline-block align-top"/> 'va en a'

function App() {
  return (
    <>     
        <nav className="navbar navbar-expand-sm navbar-light" Style="background-color: #40E0D0;">
          <a className="p-2 navbar-brand" href="/" >
                    
            Monitoreo de dispositivos
          </a>            
        </nav>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-md-6"> 
            <h2>Dispositivos</h2>
          </div>          
        </div>
          <Formm />
        </div>
    </>
  );
}

export default App;
