import { configureStore } from "@reduxjs/toolkit";
import todoListSliceReducer from "../features/todoList/todoListSlice";


export const store = configureStore({
  reducer: {
    todoList: todoListSliceReducer,
  }
})
