import TodoList from './components/TodoList/TodoList'
import { TodoListContextProvider } from './contexts/TodoListContext'

function App() {

  return (
    <>
      <TodoListContextProvider>
        <div className='bg-zinc-900 h-dvh w-dvw p-8 text-white'>
        <TodoList />
        </div>
      </TodoListContextProvider>
    </>
  )
}

export default App
