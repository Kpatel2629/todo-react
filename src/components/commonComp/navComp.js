import React from 'react'
import {NavLink} from 'react-router-dom';
import './BeautyButton.css'

 const NavigationItem = (props) => {
    return (
    <NavLink to={props.to} exact 
    style={props.style} 
    className="beautybtn">
        <text style = {{verticalAlign: "middle", marginTop:"5px"}}>
            {props.text}
            </text>
    </NavLink>
    )
}

export default NavigationItem;
