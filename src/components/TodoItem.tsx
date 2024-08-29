"use client";
import { deleTodo } from "@/redux/TodoSlice";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
interface Item {
  item: {
    todo: string;
    _id: string;
  };
}

const TodoItem = ({ item }: Item) => {
  const dispatch = useDispatch();

  return (
    <motion.li
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ y: { type: "spring", stiffness: 120 } }}
      className="w-full  font-medium border-l-green-400 
    border-l-[6px] border border-green-800 px-2 py-1 cursor-pointer
    flex items-center justify-between
    "
    >
      {item?.todo}
      <MdDelete
        onClick={() => {
          dispatch(
            deleTodo(item?._id),
            toast.success("todo delete successfully")
          );
        }}
        className="text-xl hover:text-red-500 duration-200 "
      />
    </motion.li>
  );
};

export default TodoItem;
