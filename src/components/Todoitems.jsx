import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

function Todoitems({ text, id, isComplete, deleteTodo, toggle }) {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img className="w-7" src={isComplete ? tick : not_tick} />
        <p
          className={`text-slate-600 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        src={delete_icon}
        alt=""
        className="w-5 cursor-pointer"
        onClick={() => {
          deleteTodo(id);
        }}
      />
    </div>
  );
}

export default Todoitems;
