import React, { useRef, useState, useEffect } from "react";
import todo_icon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";

function Todo() {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")?
  JSON.parse(localStorage.getItem("todos")): []);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    console.log(inputText);

    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((data) => {
      return [...data, newTodo];
    });
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((data) => {
      return data.filter((todo) => todo.id !== id);
      });
  }

const toggle = (id) => {
  setTodoList((data) => {
    return data.map((todo) => {
      if(todo.id === id){
        return {...todo, isComplete: !todo.isComplete};
      }
      return todo;
    })
  })
}

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todoList))
},[todoList])

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-xl border-x-gray-300">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h2 className="text-3xl font-semibold">TodoList</h2>
      </div>

      {/* ---- input box ---- */}

      <div className="flex items-center my-7">
        <input
          ref={inputRef}
          className="bg-slate-100 outline-none flex-1 h-14 pl-6 pr-2 text-pink-600 font-semibold"
          type="text"
          placeholder="Write your task"
        />
        <button
          onClick={add}
          className="bg-rose-400 text-white h-14 pl-5 pr-5  rounded-e-none hover:bg-red-600 duration-100"
        >
          Add Task
        </button>
      </div>

      {/* ---- todo list ---- */}
      <div className="">
        {todoList.map((item, index) => {
          return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>;
        })}
      </div>
    </div>
  );
}

export default Todo;
