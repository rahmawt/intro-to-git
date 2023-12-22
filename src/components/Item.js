import React from "react";
import { useRef } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdFileDownloadDone } from "react-icons/md";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={item.id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button 
        style={{color:"black"}}
        onClick={() => changeFocus()}>
          <CiEdit />
        </button>
        {item.completed === false && (
          <button 
        style={{color:"green"}}
        onClick={() => completeTodo(item.id)}>
          <MdFileDownloadDone />
        </button>)}
        <button 
        style={{color:"red"}}
        onClick={() => removeTodo(item.id)}>
          <MdDeleteOutline />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
