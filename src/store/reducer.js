import * as actionTypes from './actions';
import { updateObject } from '../Utility/Utility';

const initialState = {
    username:'',
    password:'',
    todos: [],
    error:'',
    loading:false,
};

const addTodo = (state,action) => {
    const newTodo = {
        id: action.TodoData.id, 
        name: action.TodoData.name,
        isCompleted:action.TodoData.isCompleted
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

const funError = (state,action) => {
    return updateObject(state,{error : action.error});
}

const On_StartRequest = (state,action) => {
    return updateObject(state,{loading : action.loading})
}

const get_alltodos = (state,action) => {
    return updateObject(state,{todos : action.todos})
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ALLTODOS : return get_alltodos(state,action);
        case actionTypes.ON_ERROR : return funError(state,action) ;
        case actionTypes.On_STARTREQUESTIG : return On_StartRequest(state,action);
        case actionTypes.ADD_TODO : return addTodo(state,action);
        case actionTypes.REMOVE_TODO: return removeTodo(state,action);
        case actionTypes.DELETE_TODO: return deleteTodo(state,action);
        case actionTypes.ADD_USER:return updateObject(state,{username:action.UserData.username,password:action.UserData.password});
        default : return state;
    }
};

export default reducer;