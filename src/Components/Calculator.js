import React, {Component} from 'react';
import Screen from './Screen';
import Keys from './Keys';
import './Calculator.css';

export default class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: "0"
    }
  }

  onKeyPress(keyValue) {

    let finalValue;
    if(this.state.value == '0' || (this.state.value == '0' && keyValue == '0')) {
      finalValue = keyValue;
    } else if (keyValue == 'Supr') {
      finalValue = '0'
    } else {
      finalValue = this.state.value + keyValue;
    }

    this.setState({value: finalValue});
  }

  render() {
    return (
      <div className="calculator">
        <Screen value={this.state.value}/>
        <div className="keyboard">
          <div className="key-row">
          <Keys value='7' onPress={ v =>  this.onKeyPress(v)}/>
          <Keys value='8' onPress={ v =>  this.onKeyPress(v)}/>
          <Keys value='9' onPress={ v =>  this.onKeyPress(v)}/>
          </div>
          <div className="key-row">
            <Keys value='4' onPress={ v =>  this.onKeyPress(v)}/>
            <Keys value='5' onPress={ v =>  this.onKeyPress(v)}/>
            <Keys value='6' onPress={ v =>  this.onKeyPress(v)}/>
          </div>
          <div className="key-row">
            <Keys value='1' onPress={ v =>  this.onKeyPress(v)}/>
            <Keys value='2' onPress={ v =>  this.onKeyPress(v)}/>
            <Keys value='3' onPress={ v =>  this.onKeyPress(v)}/>
          </div>
          <div className="key-row">
            <Keys value='+' onPress={ v =>  this.onKeyPress(v)}/>
            <Keys value='0' onPress={ v =>  this.onKeyPress(v)}/>
            <Keys value='-' onPress={ v =>  this.onKeyPress(v)}/>
          </div>
          <div className="key-row">
            <Keys value='Supr' onPress={ v =>  this.onKeyPress(v)}/>
            <Keys value='=' onPress={ v =>  this.onKeyPress(v)}/>
            <Keys value='*' onPress={ v =>  this.onKeyPress(v)}/>
          </div>
        </div>
      </div>
    );
  }
}
