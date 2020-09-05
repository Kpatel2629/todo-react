import axios from '../Axios/axios';
export const GET_ALLTODOS = 'GET_ALLTODOS';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_USER = 'ADD_USER';
export const DELETE_TODO = 'DELETE_TODO';
export const ON_ERROR = 'ON_ERROR';
export const ON_INIT_DELETE = 'ON_INIT_DELETE';
export const ON_INIT_REMOVED = 'ON_INIT_REMOVED';
export const On_STARTREQUESTIG = 'On_STARTREQUESTIG';

export const postReqTodo = (TodoData) => {
    return {
        type: ADD_TODO,
            TodoData :{
                id:TodoData.id,
                name:TodoData.name,
                isCompleted:TodoData.isCompleted
        }
    };
}

export const startRequst = (isLoading) => {
    return {
        type:On_STARTREQUESTIG,
        loading:isLoading
    }
}

export const onError = (error) => {
    return{
        type:ON_ERROR,
        error:error.message
    }
}

export const addTodo = (todoData) => {
    return dispatch => {
       dispatch(startRequst(true));
            axios.post('todos.json', todoData)
            .then(resonse => { 
               todoData.id = resonse.data.name;
                dispatch(postReqTodo(todoData));
                dispatch(startRequst(false));
                dispatch(onError(null))
        })
        .catch(error => dispatch(onError(error)));
    }
};

export const getTodos = (TodoList) => {
    return {
        type : GET_ALLTODOS,
        todos:TodoList
    }
}

export const getTodosfromFirebase = () => {
    let newArrayTodo = [];
    return dispatch => {
        dispatch(startRequst(true));
            axios.get('todos.json')
                 .then(response => {      
                    Object.entries(response.data).map(obj => {
                        let objectTodo = {
                        id:obj[0],
                        ...obj[1]
                        }
                    newArrayTodo.push(objectTodo);
                   })
             dispatch(getTodos(newArrayTodo));
             dispatch(startRequst(false));
             
        })
        .catch(error => dispatch(onError(error)),dispatch(startRequst(false)));
    }
 }

 export const Tobe_Removed = (id,completed,name) => {
    return {
        type: REMOVE_TODO,
        todoId:id,
        name:name,
        completed:completed
    };
 }

export const removeTodo = (id,completed,name) => {
    return {
       type:ON_INIT_REMOVED,
       id:id,
       completed:completed,
       name:name

    }
};

export const Tobe_deleteTodo = (id) => {
    return {
        type : DELETE_TODO,
        todoId:id
    }
}

export const deleteTodo = (id) =>{
   return {
       type:ON_INIT_DELETE,
       id:id
   }
}

export const objUser = (Uname,Pas) => {
    return{
        type: ADD_USER,
        UserData : {
            username:Uname,
            password:Pas
        }
    };
}

export const addUser = (Uname,Pas) => {
   return dispatch => {
       setTimeout(() => {
        dispatch(objUser(Uname,Pas));
       }, 2000);
   }
};