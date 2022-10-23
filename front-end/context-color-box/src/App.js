// ./App.js
import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import MyContext from './components/MyContext';

class App extends React.Component {
  state = {
    backgroundArray: ['blue', 'red', 'yellow'],
    indexColor: 0,
  }

  changeColorBtn = ({target}) => {
    const { backgroundArray, indexColor } = this.state;

    if (indexColor < (backgroundArray.length - 1)) {
      this.setState(({ indexColor }) => ({ indexColor: indexColor + 1 }))
    } else {
      this.setState({ indexColor: 0 })
    }

  };

  render() {
    const contextValue = {
      backgroundArray: this.state.backgroundArray,
      indexColor: this.state.indexColor,
      changeColor: this.changeColorBtn,
    }

    return (
      <MyContext.Provider value={ contextValue }>
        <ColorBox />
      </MyContext.Provider>
    );
  }
}
export default App;