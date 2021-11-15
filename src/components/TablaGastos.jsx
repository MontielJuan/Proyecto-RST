import React from "react";



const TablaGastos = ({data}) => {



    return (
        <div className="text-center ">
            <table>
                <thead>
                    <tr>
                        <th>Estado</th>
                        <th>Fecha</th>
                        <th>N° Pauta</th>
                        <th>Punto</th>
                        <th>Detalles Pauta</th>
                        <th>Tiempo entre pautas</th>
                    </tr>
                </thead>
                <tbody>
                   
                { data && (
                    data.map((dato) => {
                        return(
                            <tr key={dato.id}>
                                <th>{dato.Estado}</th>
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