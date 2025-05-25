import { useSelector } from "react-redux"
import TodoForm from "./components/TodoForm/TodoForm"
import TodoItem from "./components/TodoItem/TodoItem"

function App() {

  const list = useSelector( state => state.todoList.list )

  return (
    <>
      <div className="h-dvh w-dvw bg-gray-950 flex flex-col items-center">
        <div className="tracking-widest text-white">
          <div className="p-4 m-4">
            <div className="text-4xl font-bold">
              Todolist using Redux Toolkit!!
            </div>

            <div>
              <div>
                <TodoForm />
              </div>
              <div>
                {
                  list.map( (obj, index) => <div key={obj.id}>
                    <TodoItem index={index} obj={obj} />
                  </div> )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
