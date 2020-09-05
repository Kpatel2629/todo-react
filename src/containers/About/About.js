import React, { Component } from 'react';
import BeautyButton from '../../components/commonComp/BeautyButton';
import  './About.css';
import NavBar from '../../components/NavBar/NavBar';
class About extends Component {
    render() {
        return (
            <div>
            <NavBar/>
            <div className="card">
            <img style ={{width:"170px",height:"170px"}} src="https://svgshare.com/i/Kup.svg" alt="" ></img>
            </div>
            {/* <BeautyButton text="Photo will go here" /> */}
            </div>
        );
    }
}

export default About;