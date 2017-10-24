import React from 'react';
import './Key.css'

const Keys = (props) => (
  <button
    className="key-button" 
    onClick={() => props.onPress(props.value)}>
    {props.value}
  </button>
)

export default Keys;
