export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_USER = 'ADD_USER';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (text) => {
    return{
        type: ADD_TODO,
        TodoData : {
            name:text
        }
    };
};

export const removeTodo = (id,completed) => {
    
    return {
        type: REMOVE_TODO,
        todoId:id,
        completed:completed
    };
};

export const deleteTodo = (id) =>{
    return {
        type : DELETE_TODO,
        todoId:id
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
       setTimeout(()=>{
            dispatch(objUser(Uname,Pas))
       },2000)
   }
};
