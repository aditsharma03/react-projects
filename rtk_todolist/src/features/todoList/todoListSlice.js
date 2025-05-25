import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
  list: [],
}


const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {

    addItem: (state, action) => {
      let newItem = {
        id: nanoid(),
        text: action.payload,
        isCompleted: false,
      }

      state.list.push(newItem);
    },

    removeItem: (state, action) => {
        let id = action.payload;
        state.list = state.list.filter( item => item.id !== id );
      },

    toggleCompletion: (state, action) => {
      let id = action.payload;
      state.list = state.list.map( item => item.id === id? {...item, isCompleted: !item.isCompleted}: item );
    }
  }
})


export const {addItem, removeItem, toggleCompletion } = todoListSlice.actions;

export default todoListSlice.reducer
