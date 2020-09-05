import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
import NavigationItem from '../commonComp/navComp';



class NavBar extends Component {

  render() {
    return (
          <div style={{textAlign:"center"}}>
            <header>
                 <NavigationItem to="/signup" style ={{display:'inline-block',marginLeft:'10px', textDecoration: 'none'}} text="sign up"/>
                 <NavigationItem to="/" style ={{display:'inline-block',marginLeft:'10px', textDecoration: 'none'}} text="Log in"/>
                 <NavigationItem to="/about" style ={{display:'inline-block',marginLeft:'10px', textDecoration: 'none'}}  text="About"/>
            </header>
          </div>
      );
    }
  }
  
  export default withRouter(NavBar);
  