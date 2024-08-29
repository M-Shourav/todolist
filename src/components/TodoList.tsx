import { useDispatch, useSelector } from "react-redux";
import { State } from "../../type";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";
import { useState } from "react";
import { removeTodo } from "@/redux/TodoSlice";
import toast from "react-hot-toast";
const TodoList = () => {
  const { todoList } = useSelector((state: State) => state?.todo);
  const [showRemove, setRemove] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4 border border-gray-600 mt-5 p-4 rounded-md">
      {todoList?.length > 0 && (
        <div>
          <ul className="max-h-[300px] flex flex-col gap-2 border border-slate-600 p-2  shadow-lg shadow-gray-800">
            {todoList?.map((item) => (
              <TodoItem key={item?._id} item={item} />
            ))}
          </ul>
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setRemove(true)}
            className="border border-gray-600 px-4 py-2 mt-2 text-sm rounded-md text-red-500
           hover:border-red-600 duration-200"
          >
            Remove Todo
          </motion.button>
        </div>
      )}

      {todoList?.length === 0 && (
        <p className="text-base text-yellow-500 text-center tracking-wide">
          Your Todo is Empty!
        </p>
      )}

      {showRemove && (
        <div className="w-full min-h-screen fixed top-0 left-0 bg-themeColor bg-opacity-60">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2
           -translate-y-1/2 bg-themeColor shadow-sm border border-green-800 shadow-blue-900 px-8
           py-2"
          >
            <p className="text-sm text-center text-red-500 font-medium">
              Are you sure{" "}
              <span className="underline underline-offset-2 decoration-[1px]">
                Remove
              </span>{" "}
              all the todos
            </p>
            <div className="flex items-center gap-8 justify-center mt-4">
              <button
                onClick={() => setRemove(false)}
                className="border border-gray-600 px-4 py-2 mt-2 text-sm rounded-md text-red-500
              hover:border-red-600 duration-200"
              >
                No
              </button>
              <button
                onClick={() =>
                  dispatch(
                    removeTodo(),
                    toast.success("all todo removed successfully"),
                    setRemove(false)
                  )
                }
                className="border border-gray-600 px-4 py-2 mt-2 text-sm rounded-md text-red-500
               hover:border-red-600 duration-200"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
