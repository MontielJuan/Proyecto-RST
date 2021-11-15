import React, { useEffect, useState } from 'react';

export const SelectCity = ({data, setFilteredData}) => {

    const [city, setCity] = useState("")

    const handleChange = (event) => {
        event.preventDefault()
        setCity(event.target.value)
    }

    useEffect(() => {
        if(data !== undefined) {
          setFilteredData(data.filter((dato) => dato.Ciudad === city))
        }
      },[setFilteredData,city])


  return (
    <>
        <div className="caja" onChange={handleChange}>
            <select className="form-select">
            <option defaultValue>Open this select menu</option>
                { data && (
                    data.map((dato) => {
                        return (
                            <option key={dato.Ciudad}>{dato.Ciudad}</option>
                        )
                    }))
                }
            </select>
        </div>
    </>
  );
}