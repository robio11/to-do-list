import React, { useState } from "react";
import ShowTo from "../showtodo/ShowTo";
import "./Text.css";

function Text({ theme }) {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          // return task;
          return { defaultValue: "My default value" };
        }
      })
    );
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center px-10 py-5 bg-white w-fit h-fit shadow-md rounded-lg mt-16">
        <div>
          <img
            className="flex w-40 h-40 justify-center items-center"
            src="task.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <input
            className="flex h-10 w-80 border outline-none shadow-inner px-2 rounded-md font-serif"
            onChange={handleChange}
          />
          <button
            className="flex bg-cyan-500 text-white p-2 rounded-xl font-serif"
            onClick={addTask}
          >
            {" "}
            Add Task
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        {todoList.map((task) => {
          return (
            <ShowTo
              taskName={task.taskName || "Please add your task!"}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Text;
