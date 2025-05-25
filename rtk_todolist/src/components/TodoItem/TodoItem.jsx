import { useDispatch } from "react-redux";
import { removeItem, toggleCompletion } from "../../features/todoList/todoListSlice";

const TodoItem = ({ obj }) => {


  const dispatch = useDispatch();


  const deletionHandler = () => {
    dispatch( removeItem(obj.id) );
  }

  const toggleHandler = () => {
    dispatch( toggleCompletion(obj.id) );
  }


  return (
    <div className={`flex justify-between items-center my-2 rounded-sm p-2 font-bold ${obj.isCompleted? "line-through bg-green-300 text-gray-950": ""}`}>
      <div className="flex gap-4 text-xl items-center">
        <div>
          <input type="checkbox" checked={obj.isCompleted} onChange={toggleHandler} />
        </div>
        <div>{obj.text}</div>
      </div>

      <div>
        <button onClick={deletionHandler} className="px-2 text-white rounded-sm bg-red-500">X</button>
      </div>
    </div>
  );
};

export default TodoItem;
