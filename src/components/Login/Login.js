import React,{ Component } from 'react';
import * as actionCreaters from '../../store/actions';
import './Login.css';
import { connect } from 'react-redux';
import BeautyButton from '../commonComp/BeautyButton';
import NavBar from '../NavBar/NavBar';

class Login extends Component {

    state = {
        username:'',
        password:'',     
    }

    inputChangeHandler = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    gotoTodo = () => {
         (this.state.username !== '' && this.state.password !== '') ? this.props.history.push("/todos") : this.props.history.replace("/")
    }

    render(){
      return(          
         <div className="AddPerson">
             <NavBar/>
             <h1 style={{marginBottom:"40px",marginTop:"40px",color:"purple"}} >Log In</h1>
             <input style={{marginBottom:"30px"}} name = 'username' value={this.state.username} type="text" placeholder="Username" onChange={this.inputChangeHandler}></input>
             <br/>
             <input name = 'password' value={this.state.password} type="password" placeholder="Password" onChange={this.inputChangeHandler}></input>
             <BeautyButton text="Log in" clicked={()=>{ this.props.onAddedUser(this.state.username,this.state.password)
             this.gotoTodo()}}/>
        </div>
        );
    }
} 

const mapStateToProps = state => {
    return {
        userName: state.username,
        password:state.password
    };
};

const mapDispatchToProps = dispatch => {
    return { 
        onAddedUser: (username,password) =>  dispatch(actionCreaters.addUser(username,password))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);