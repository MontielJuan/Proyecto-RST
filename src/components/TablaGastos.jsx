import React, { Component } from 'react'
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { firebaseConfig } from "../firebase";
import ListaGastos from './ListaGastos'

class TablaGastos extends Component {
    render() {
        return (
            <div className="row justify-content-center">
            <div className="form-group col-md-20">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Estado</th>
                            <th>Fecha</th>
                            <th>N° Pauta</th>
                            <th>Punto</th>
                            <th>Detalles Pista</th>
                            <th>Tiempo entre pautas</th>

                            
                        </tr>
                    </thead>                                                        
                    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
                        <FirebaseDatabaseNode path="users/" limitToFirst={4} orderByValue={"fecha"}>
                            {(data) => {
                                const { value } = data;
                                if (value === null || typeof value === "undefined") return null;                                
                                const values = Object.values(value);
                                return <ListaGastos items={values} />
                            }}
                        </FirebaseDatabaseNode>
                    </FirebaseDatabaseProvider>
                </table>
            </div>
            </div>
        )
    }
}

export default TablaGastos;