import React, { useEffect } from "react";



const TablaGastos = ({data,setEstado,estado}) => {



    useEffect(() => {
        if(data !== undefined){
            data.map(dato => {
                if(dato.Estado === "OFF"){
                    setEstado("OFF")
                }
    
                return null
            })
        }
    }, [data,setEstado])

    return (
        <div className="text-center ">
            <table>
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
                <tbody>
                   
                { data && (
                    data.map((dato) => {
                        return(
                            <tr key={dato.id}>
                                <th>{estado}</th>
                                <th>{dato.Fecha}</th>
                                <th>{dato.NPauta}</th>
                                <th>{dato.Punto}</th>
                                <th>{dato.Reproduccion}</th>
                                <th>{dato.TPautas}</th>
                            </tr>
                        )
                        }
                    )
                )
                }
                
                </tbody>
            </table>
            <br/>
        </div>
    );
}

export default TablaGastos;