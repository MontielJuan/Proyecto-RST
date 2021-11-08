import React, { Component } from "react";
import Formm from "../components/Formm";
import { auth } from "../firebase";

export default class Data extends Component {

  render() {
    return (
        <>     
        <nav className="navbar navbar-expand-sm navbar-light" Style="background-color: #40E0D0;">
        <button className="btn btn-dark mr-3" onClick={() => auth().signOut()}>Logout</button>
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
}