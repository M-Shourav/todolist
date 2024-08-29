"use client";
import { addTodo } from "@/redux/TodoSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
const InputForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (todo === "") {
      toast.error("please add Todo");
    } else {
      dispatch(
        addTodo({ _id: Math.random().toString().slice(0, 4), todo: todo })
      );
      setTodo("");
      toast.success("Todo added successfully");
    }
  };
  return (
    <div>
      <form className="flex h-10  items-center justify-between gap-x-5 relative">
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter your todo"
          value={todo}
          className="flex-1 h-full outline-none bg-transparent text-white
           border-[1px] border-gray-500 pl-4 pr-10 placeholder:text-sm text-base
           rounded-md hover:border-green-500 focus-visible:border-green-500 duration-200"
        />
        {todo && (
          <span
            onClick={() => setTodo("")}
            className="absolute top-3 right-36 hover:text-red-500 duration-200 cursor-pointer"
          >
            <IoCloseOutline />
          </span>
        )}
        <button
          type="submit"
          onClick={handleTodo}
          className="border-[1px] border-gray-500 px-4 py-2 rounded-md text-xs md:text-sm 
         uppercase hover:text-orange-500 duration-200 "
        >
          add todo
        </button>
      </form>
      {/* todoList */}
      <TodoList />
    </div>
  );
};

export default InputForm;
