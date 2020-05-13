import React,{ Component } from 'react';

import './AddPerson.css';
import { connect } from 'react-redux';
import Loading from '../Loading';

class AddPerson extends Component {

    state = {
        name:'',
        greetMsg:''
    }

    inputChangeHandler = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    componentDidMount(){
         var time = new Date().getHours();
         var greeting = '';
        if (time < 10) {
            greeting = "Good morning";
        } else if (time < 20) {
            greeting = "Good afternoon";
        } else {
            greeting = "Good evening";
        }
        this.setState({
            greetMsg:greeting
        })
    }
    
    render(){
        return(
         <div className="AddPerson">
             <h1 style={{marginBottom:"40px",marginTop:"40px",color:"purple"}} >ToDo App</h1>
        <h3 style={{marginBottom:"40px",marginTop:"40px",color:"green"}} >
             {(this.props.userName === '' && this.props.password === '') ? <Loading text = "loading..." /> : 
        (this.state.greetMsg +" @" +this.props.userName)}</h3>

            <input name = 'name' value={this.state.name} type="text" placeholder="Name" onChange={this.inputChangeHandler}></input>
            <button className="addbtn" onClick={() => this.props.todoAdded(this.state.name)}>Add</button>
        </div>
        );
    }
} 

const mapStateToProps = state => {
    return {
        userName:state.username,
        password:state.password
    };
};

export default connect(mapStateToProps) (AddPerson);