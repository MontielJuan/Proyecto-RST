import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { firebaseConfig } from "../firebase";
import TablaGastos from "./TablaGastos";
import NuevoGasto from "./NuevoGasto";

class Formm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalle: "",
      costo: 0,
      categoria: "",
      Pregunta: ""
    };
    this.setCategoria = this.setCategoria.bind(this);
    console.log(this.state);
  }

  setDetalle = (event) => {
    this.setState(
      { detalle: event.target.value },
      console.log(event.target.value)
    );
  };

  setPregunta = (event) => {
    this.setState(
      { Pregunta: event.target.value },
      console.log(event.target.value)
    );
  };


  setCosto = (event) => {
    this.setState(
      { costo: event.target.value },
      console.log(event.target.value)
    );
  };

  setCategoria = (selectedCategoria) => {
    this.setState({ categoria: selectedCategoria.target.value });
  };

  clean = () => {
    this.setState({
        detalle: "",
        costo: 0,
        categoria: ""
    })
  }

  render() {
    const { detalle, costo, categoria } = this.state;
    return (
      <div>
        <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
          <FirebaseDatabaseNode path="categoria/">
            {(data) => {
              const { value } = data;
              if (value === null || typeof value === "undefined") return null;
              const values = Object.values(value);
              return <div className="row justify-content-center">
                <div className="form-group col-md-6">
                  <label htmlFor="">Ingrese la ciudad de los dispositivos:</label>
                  <select
                    onChange={this.setCategoria}
                    value={categoria}
                    className="form-control"
                  >
                    <option value={null}>Seleccione una ciudad</option>
                    {values.map((value) => {
                      return (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>;
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>
        
        <NuevoGasto detail={detalle} cost={costo} categoria={categoria} clean={this.clean}/>
        
        <br />
        <TablaGastos />
      </div>
    );
    
  }
}



export default Formm;
