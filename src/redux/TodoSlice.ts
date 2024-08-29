import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../type";
interface StateTodo {
  todoList: Todo[];
}

const initialState: StateTodo = {
  todoList: [],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload);
    },
    deleTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (item) => item?._id !== action.payload
      );
    },
    removeTodo: (state) => {
      state.todoList = [];
    },
  },
});

export const { addTodo, removeTodo, deleTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
