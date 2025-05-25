import { useState } from "react";
import { useTodoListContext } from "../../contexts/TodoListContext";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [editId, setEditId] = useState(undefined);
  const { todoList, addItem, deleteItem, updateItem, toggleStatus } = useTodoListContext();


  const additionHandler = () => {
    addItem({ id: Date.now(), content: item, completed: false, isBeingEdited: false})
    setItem("");
  }
  const editHandler = () => {
    if( editId ){
      updateItem( editId, item );
    }
    setItem("");
    setEditId(undefined);
  }

  return (
    <div className=" max-w-lg bg-zinc-800 mx-auto flex flex-col gap-8 tracking-widest font-mono">
      <h1 className="text-4xl">TodoList</h1>
      <div>
        <input
          type="text"
          placeholder="content here"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
          className="p-2 m-2 rounded-md text-black"
        />
        {
          !editId ? (
            <button
              type="button"
              onClick={ additionHandler }
              className="bg-zinc-700 p-2 m-2 hover:bg-zinc-400 duration-100 hover:text-black rounded-md border-b-2 border-b-white"
            >
              Add Task
            </button>
          ):
            (
              <span>
                <button
                  type="button"
                  onClick={ () => { setEditId(undefined), setItem("") } }
              className="bg-zinc-700 p-2 m-2 hover:bg-zinc-400 duration-100 hover:text-black rounded-md border-b-2 border-b-white"
                >
                  Discard
                </button>
                <button
                  type="button"
                  onClick={ editHandler }
              className="bg-zinc-700 p-2 m-2 hover:bg-zinc-400 duration-100 hover:text-black rounded-md border-b-2 border-b-white"
                >
                  Save
                </button>
              </span>
            )
        }
      </div>
      <div className="w-full">
        <ul className="w-full">
          {todoList.map((todo) => (
            <li key={todo.id} className="w-full">
                <span className="w-full">
                  <input type="checkbox" />
                  <span className="mx-12">{todo.content}</span>
                  <button type="button" onClick={() => { setItem(todo.content), setEditId(todo.id) } }
              className="bg-zinc-700 p-2 m-2 hover:bg-zinc-400 duration-100 hover:text-black rounded-md border-b-2 border-b-white"
                >
                    edit
                  </button>
                  <button type="button" onClick={() => deleteItem(todo.id)}
              className="bg-zinc-700 p-2 m-2 hover:bg-zinc-400 duration-100 hover:text-black rounded-md border-b-2 border-b-white"
                >
                    delete
                  </button>
                </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
