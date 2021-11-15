import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import firebase  from "../firebase"
import TablaGastos from "../components/TablaGastos";
import { SelectCity } from "../components/SelectCity";


const Data = () => {

    const [data, setData] = useState();
    const [estado, setEstado] = useState("OFF")
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
      const dataRef = firebase.database().ref('users');
      dataRef.on('value', (snapshot) => {
        const datas = snapshot.val();
        const data = [];
        for (let id in datas) {
          data.push({ id, ...datas[id] });
        }
        setData(data);
      });
    }, []);


    const cambiarEstado = () => {
      if(data !== undefined) {
        data.map((dato) => {
          const userRef = firebase.database().ref('users').child(dato.id);
          userRef.update({
            Estado:"OFF",
          });

          return null
        })
      }
    };

    return (
        <>     
        <nav className="navbar navbar-expand-sm navbar-light">
        <button className="btn btn-dark mr-3" onClick={() => auth().signOut()}>Logout</button>
          <a className="p-2 navbar-brand" href="/" >
                    
            Monitoreo de dispositivos
          </a>            
        </nav>

        <div className="container mt-3">
            <button className="mt-3 btn btn-outline-primary" onClick={() => {cambiarEstado()}}>Refresh</button>
        </div>
        


        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-md-6"> 
            <h2>Dispositivos</h2>

            <div>
              <SelectCity data={data} setFilteredData={setFilteredData} />
            </div>
          </div>          
        </div>
          <TablaGastos data = {filteredData} estado={estado} setEstado={setEstado}/>
        </div>
    </>
    );
}

export default Data;