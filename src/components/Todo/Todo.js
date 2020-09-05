import React , { memo} from 'react';
import './Todo.css';


const todo = memo(props => {

    return(
        <div className="Todo" style = {{display: props.show ? "flex" : "none"}} >
          
            <h3 style = {{marginLeft:"20px"}}>{props.name}</h3> 
            <text  onClick= { props.clicked} style = {{marginBottom:"10px",marginLeft:"35px",marginRight:"20px"}}>{props.status}</text>
            <button style = {{marginTop:"8px",marginLeft:"20px",marginRight:"20px"}} className = "delete" onClick = {props.deleted}> 	&#x274C; </button>
        </div>
    )});

export default todo;