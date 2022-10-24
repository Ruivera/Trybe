import React, { useContext } from 'react'
import MyContext from '../context/MyContext';

function Form() {
    const context = useContext(MyContext);
    const { setAge, setCity, setName } = context;

    return(
    <div className="App">
      <form>
        <label htmlFor="name" >
          Nome Completo:
          <input
            id="name"
            name="name"
            type="text"
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label htmlFor="age" >
          Idade:
          <input
            id="age"
            name="age"
            type="number"
            onChange={({ target }) => setAge(target.value)}
          />
        </label>
        <label htmlFor="city" >
          Cidade:
          <input
            id="city"
            name="city"
            type="text"
            onChange={({ target }) => setCity(target.value)}
          />
        </label>
      </form>
    </div>
    );
}

export default Form;