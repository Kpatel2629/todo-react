import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo/Todo';
import AddTodo from '../components/AddToDo/AddTodo';
import * as actionCreators from '../store/actions';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar/NavBar';
import BeautyButton from '../components/commonComp/BeautyButton';

class Todos extends Component {

    state = {
        showCompletedTodos : true
    }

    todosShowHandler = () => {
        this.setState(prevState => ({
            showCompletedTodos:!prevState.showCompletedTodos
        }))
       
    }
    
    componentDidMount = () => {
       this.props.getallTodos();
    }

    render () {

        let todoContent = ( 
        <ul style={{textAlign:"center"}}>   
         <li style={{display:'inline-block',marginLeft:"20px",position:"relative",marginRight:"30px"}}>
            {this.props.tds.map(todo => (
               this.state.showCompletedTodos ?
                <Todo 
                    id={todo.id}
                    key={todo.id}
                    name={todo.name}
                    show = {todo.isCompleted === this.state.showCompletedTodos}
                    status = "&#x1F44D;"
                    deleted = {()=> this.props.ondeleteTodo(todo.id)}
                    clicked={() => this.props.onRemovedTodo(todo.id, false, todo.name)}/> :
                    <Todo 
                    id={todo.id}
                    key={todo.id}
                    name={todo.name}
                    show = {todo.isCompleted === this.state.showCompletedTodos}
                    status = "..."
                    deleted = {()=> this.props.ondeleteTodo(todo.id)}
                    clicked={() => this.props.onRemovedTodo(todo.id, true, todo.name)}/> 
                   
            ))} 
           </li >
        </ul> );


        return (
            <Fragment>
             <NavBar/>   
             <AddTodo todoAdded={this.props.onAddedTodo} />
             <BeautyButton clicked = {this.todosShowHandler} text = {this.state.showCompletedTodos ? 'Show InCompleted' : 'Show Completed' }/>
             {this.props.isLoading ? <Loading/> : todoContent}
           </Fragment>        
        );
    }
}

const mapStateToProps = state => {
    return {
        tds: state.todos,
        password:state.password,
        userName:state.username,
        err:state.error,
        isLoading:state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedTodo: (todoData) => dispatch(actionCreators.addTodo(todoData)),
        onRemovedTodo: (id,completed,name) => dispatch(actionCreators.removeTodo(id,completed,name)),
        ondeleteTodo : (id) => dispatch(actionCreators.deleteTodo(id)),
        getallTodos : () => dispatch(actionCreators.getTodosfromFirebase()),
        getTodoFromStore : () => dispatch(actionCreators.getTodos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);