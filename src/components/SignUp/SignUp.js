import React,{ Component } from 'react';
import * as actionCreaters from '../../store/actions';
import { connect } from 'react-redux';
import BeautyButton from '../commonComp/BeautyButton';
import './Signup.css';
import NavBar from '../NavBar/NavBar';

class SignUp extends Component {

    state = {
        name:'',
        email:'',
        phone:'',
        username:'',
        password:'',     
    }

    inputChangeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onClickEvent = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div className="Signuppage">  
            
             <h1 style={{marginBottom:"40px",marginTop:"40px",color:"purple"}} >Create an account</h1>
             <input  style={{marginBottom:"30px"}}  name = 'name'     value={this.state.name}     type="text"     placeholder="First Name"   onChange={this.inputChangeHandler}></input> <br/>       
             <input  style={{marginBottom:"30px"}}  name = 'username' value={this.state.username} type="text"     placeholder="Username"     onChange={this.inputChangeHandler}></input><br/>
             <input  style={{marginBottom:"30px"}}  name = 'password' value={this.state.password} type="password" placeholder="Password"     onChange={this.inputChangeHandler}></input><br/>
             <input  style={{marginBottom:"30px"}}  name = 'email'    value={this.state.email}    type="email"    placeholder="Email"        onChange={this.inputChangeHandler}></input><br/>
             <input  style={{marginBottom:"30px"}}  name = 'phone'    value={this.state.phone}    type="phonenumber" placeholder="Phone Number" onChange={this.inputChangeHandler}></input><br/>         
             <BeautyButton clicked={() => {this.onClickEvent()}} text = "Signup"/>
            </div>
        );
    }
}

export default SignUp;