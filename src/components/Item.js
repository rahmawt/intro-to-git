import React from "react";
import { useRef } from "react";

const TodoItem = (props) => {

    const {item, updateTodo, removeTodo, completeTodo} = props;

    const inputRef = useRef(true);

    const changeFokus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };

    const update = (id,value,e) => {
        if(e.which === 13){
            updateTodo({id, item: value});
            inputRef.current.disabled = true;

        }
    };


    return(
            <li key={item.id} className="card">
                <textarea ref={inputRef} disabled={inputRef} defaultValue={item.item} onKeyDown={(e)=>update(item.id, inputRef.current.value, e)}/>
                <div className="btns">
                <button onClick={()=>changeFokus()}>Edit</button>
                <button onClick={()=>completeTodo(item.id)}>Complete</button>
                <button onClick={()=>removeTodo(item.id)}>Delete</button>
                </div>


                {item.complete && <span className="complete">done</span>}
                
            </li>
    );
}

export default TodoItem;