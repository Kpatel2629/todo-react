import React from 'react';
import './BeautyButton.css';
const BeautyButton = (props) => ( <button className="beautybtn" onClick = {props.clicked} >{props.text}</button> );

export default BeautyButton;