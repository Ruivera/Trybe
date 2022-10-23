// ./components/ColorBox.js
import React from 'react';
import '../styles/box.css';
import MyContext from './MyContext';

/* class ColorBox extends React.Component {
  render() {
    return(
        <MyContext.Consumer>
            {(value) => {
            const { backgroundArray, indexColor, changeColor } = value;
            
            return (
            <button
                type="button"
                className="box"
                style={ { backgroundColor: backgroundArray[indexColor] } }
                onClick={ changeColor }
            >
                Click me to change my color!
            </button>
            )
            }}
        </MyContext.Consumer>
    )
  }
} */

class ColorBox extends React.Component {
    render() {
        const value = this.context;
        const { backgroundArray, indexColor, changeColor } = value;

    return(
            <button
                type="button"
                className="box"
                style={ { backgroundColor: backgroundArray[indexColor] } }
                onClick={ changeColor }
            >
                Click me to change my color!
            </button>
    )
    }
}

ColorBox.contextType = MyContext;

export default ColorBox;