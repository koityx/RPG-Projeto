import React from 'react';

export default function InputTxt(props){
  return(
    <div className="inputbox">
      <label>{props.placeholder}</label>
      <input type="text"/>
    </div>
  )
}