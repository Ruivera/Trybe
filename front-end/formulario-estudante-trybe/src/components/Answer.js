import React, { useContext } from 'react'
import MyContext from '../context/MyContext';

function Answer(){
    const context = useContext(MyContext);
    const { setAge, setCity, setName, ...answers} = context;
    const answersArray = Object.values(answers)

    return(
        <div>
            <ul>
                {answersArray.map((e, index) => (
                    <li key={ index }>{ e }</li>
                ))}
            </ul>
        </div>
    )
}

export default Answer;