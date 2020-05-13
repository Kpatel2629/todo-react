import React, {useEffect} from 'react';
import './Todo.css';

const todo = (props) => {
    

    return(
        <div className="Todo" onDoubleClick={props.deleted} onClick={props.clicked}>
            <h3 style = {{marginLeft:"20px"}}>{props.name}</h3> 
            <text style = {{marginBottom:"10px",marginLeft:"30px",marginRight:"20px"}}>{props.status}</text>
        </div>
    )};

export default React.memo(todo);