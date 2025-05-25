import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/todoList/todoListSlice";

const TodoForm = () => {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch()

  const additionHandler = () => {
    dispatch( addItem(inputText) );
    setInputText("");
  }

  return (
    <div className="w-full my-8">
      <input
        type="text"
        placeholder="text goes here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="outline-none w-8/12 bg-gray-100 mx-2 p-2 rounded-sm text-gray-950 font-bold"
      />
      <button type="button" onClick={additionHandler} className="w-3/12 bg-blue-700 px-4 py-2 rounded-sm">Add</button>
    </div>
  );
};

export default TodoForm;
