import * as actionTypes from './actions';
import { updateObject } from '../Utility/Utility';

const initialState = {
    username:'',
    password:'',
    todos: []
};

const addTodo = (state,action) => {
    const newTodo = {
        id: Math.random(), // not really unique but good enough here!
        name: action.TodoData.name,
        isCompleted:false
    }
    const updatedTodo = state.todos.concat( newTodo ) // Returns a copy of array not a ref to original array.
    return updateObject(state,{todos:updatedTodo})
}
const removeTodo = (state,action) => {
    const upTodos = [...state.todos]

const updatedtodo = upTodos.map(todo => (todo.id === action.todoId ? {...todo,isCompleted:action.completed} : todo))
    return updateObject(state,{todos:updatedtodo})
}

const deleteTodo = (state,action) =>{
    const RemainigTodos = state.todos.filter(todo => todo.id !== action.todoId)
    return updateObject(state,{todos:RemainigTodos})
}


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TODO : return addTodo(state,action);
        case actionTypes.REMOVE_TODO: return removeTodo(state,action);
        case actionTypes.DELETE_TODO: return deleteTodo(state,action);
        case actionTypes.ADD_USER:return updateObject(state,{username:action.UserData.username,password:action.UserData.password})
    }
    return state;
};

export default reducer;