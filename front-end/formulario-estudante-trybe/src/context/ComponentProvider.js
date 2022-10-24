import React, { useState } from 'react';
import MyContext from "./MyContext"

function ComponentProvider({ children }){
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [city, setCity] = useState('');

    const context = {
        name,
        setName,
        age,
        setAge,
        city,
        setCity,
    }

    return(
        <MyContext.Provider value={ context }>
            { children }
        </MyContext.Provider>
    )
}

export default ComponentProvider;