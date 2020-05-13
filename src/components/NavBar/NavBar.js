import React, { Component } from 'react';
import {Route,Switch,withRouter } from 'react-router-dom';
import '../commonComp/BeautyButton.css';
import BeautyButton from '../commonComp/BeautyButton';



class NavBar extends Component {

    componentDidMount = ()=> console.log(this.props);
  
    
    routeHandler = (pasRoute) => {
      this.props.history.replace(pasRoute);

    }
  
    render() {
      return (
          <div >
            <header>
                 <BeautyButton clicked = {() =>{this.routeHandler('/')}} text="Log in"/>
                 <BeautyButton clicked = {() =>{this.routeHandler('/signup')}} text="sign up"/>
            </header>
            
           
          </div>
        
      );
    }
  }
  
  export default withRouter(NavBar);
  