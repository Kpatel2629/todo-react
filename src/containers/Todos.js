import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo/Todo';
import AddTodo from '../components/AddToDo/AddTodo';
import * as actionCreators from '../store/actions';


class Todos extends Component {
    
    render () {
        return (
            <ul style={{textAlign:"center"}}>   
            <AddTodo todoAdded={this.props.onAddedTodo} />
             <li style={{display:'inline-block',marginLeft:"20px",position:"relative",marginRight:"30px"}}>
                {this.props.tds.map(todo => (
                    todo.isCompleted == true ?
                    <Todo 
                        key={todo.id}
                        name={todo.name} 
                        status = "&#x1F44D;"
                        deleted = {()=> this.props.ondeleteTodo(todo.id)}
                        clicked={() => this.props.onRemovedTodo(todo.id,false)}/> : 
                        <Todo 
                        key={todo.id}
                        name={todo.name} 
                        status = "..."
                        deleted = {()=> this.props.ondeleteTodo(todo.id)}
                        clicked={() => this.props.onRemovedTodo(todo.id,true)}/>
                ))} 
               </li >
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        tds: state.todos,
        password:state.password,
        userName:state.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedTodo: (name) => dispatch(actionCreators.addTodo(name)),
        onRemovedTodo: (id,completed) => dispatch(actionCreators.removeTodo(id,completed)),
        ondeleteTodo : (id) => dispatch(actionCreators.deleteTodo(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);