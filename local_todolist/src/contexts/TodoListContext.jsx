import { createContext, useContext, useEffect, useState } from "react";

/*
  item structure: 
  {
    id: <foo id>
    content: <foo content>
    completed: <foo boolean>
  }
 */


export const TodoListContext = createContext({
  todoList: [],
  addItem: (item) => {},
  deleteItem: (itemid) => {},
  updateItem: (itemid, item) => {},
  toggleCompletion: (itemid) => {},
  toggleStatus: (itemid) => {},
});



export const TodoListContextProvider = ({children}) => {

  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("list")));

  const addItem = ( item ) => {
    setTodoList( (prev) => {
      return [...prev, item ]
    } )
  }

  const deleteItem = ( itemid ) => {
    setTodoList( (prev) => {
      return prev.filter( todo => todo.id !== itemid );
    } )
  }

  const updateItem = ( itemid, content ) => {
    setTodoList( (prev) => {
      return prev.map( todo => todo.id === itemid ? {...todo, content}: todo );
    } )
  }

  const toggleCompletion = (itemid) => {
    setTodoList( (prev) => {
      return prev.map( todo => todo.id === itemid ? { ...todo, completed: !todo.completed }: todo );
    } )
  }

  const toggleStatus = (itemid) => {
    setTodoList( (prev) => {
      return prev.map( todo => todo.id === itemid ? { ...todo, isBeingEdited: !todo.isBeingEdited }: {...todo, isBeingEdited: false} );
    } )
  }


  useEffect( () => {
    const myList = localStorage.getItem("list");
    if(myList && myList.length > 0 ) setTodoList( JSON.parse(myList) )
  }, [] )

  useEffect( () => {
    localStorage.setItem( "list", JSON.stringify(todoList) );
  }, [todoList] )

  return <TodoListContext.Provider value={{todoList, addItem, deleteItem, updateItem, toggleCompletion, toggleStatus}}>
    {children}
  </TodoListContext.Provider>
}


export const useTodoListContext = () => {
  return useContext(TodoListContext);
}
