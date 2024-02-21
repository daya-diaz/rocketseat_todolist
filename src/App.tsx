import { ChangeEvent, useState } from "react";
import Header from "./components/Header";
import TrashIcon from './assets/trash.png';
// import Clipboard from './assets/clipboard.png'
interface Todo {
  id: number,
  content: string
}
function App() {
  let [taskCompleted, setTaskCompleted] = useState(0)
  let [createdTasks, setCreatedTasks ] = useState(0);
  const [todosList, setTodosList] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleCreateTodo() {
    if (inputValue.trim() !== '') {
      const newTodo = {
        content: inputValue,
        id: Math.random()
      }
      setTodosList(prevTodosList => [...prevTodosList, newTodo]);
      setCreatedTasks(createdTasks += 1);
      //Ajustar
      setInputValue('')
    }
  }

  function handleDeleteTodo(id: number) {
    const todosArray = todosList.filter(todo => {
      return todo.id !== id;
    })
    setTodosList(todosArray);
  }

  return (
    <div className="h-screen text-white">
      <Header />
      <div className="flex flex-col fixed top-[173px] m-auto gap-16 items-center justify-center left-1/4">
        {
          //Formulario para enviar valores dos to-dos
        }
        <form className="flex w-[736px] gap-2 items-center justify-center">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleChangeInput}
            className="flex-1 p-4 bg-gray500 rounded-lg outline-none placeholder:text-gray300 focus:border-purpleDark focus:border-[1px]"
          />
          <button
            type="button"
            className="flex items-center justify-center w-[13%] py-4 rounded-lg bg-blueDark font-bold hover:bg-blue"
            onClick={handleCreateTodo}>
            Criar
          </button>
        </form>
        {
          // div que vai aparecer os to-dos
        }
        <div className="flex flex-col gap-6 w-[736px]">
          {
            // header da div
          }
          <div className="flex justify-between w-full">
            <div className="flex gap-2 items-center justify-center">
              <p className="text-blue font-bold text-sm">Tarefas criadas</p>
              <div className="px-2 py-1 bg-gray400 rounded-full text-xs text-gray200">{createdTasks}</div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <p className="text-purple font-bold text-sm">Concluídas</p>
              <div className="px-2 py-1 bg-gray400 rounded-full text-xs text-gray200">{taskCompleted}</div>
            </div>
          </div>

          {/* <div className="flex items-center justify-center w-full">
            <div className="flex flex-col gap-4 items-center justify-center w-full h-[244px] border-t border-gray400">
              <img src={Clipboard} alt="Você não possui TODO's ainda" />
              <p className="text-gray300 leading-6"><span className="font-bold">Você ainda não tem tarefas cadastradas</span> <br/>
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </div> */}

          <div className="flex flex-col gap-3">
            {
              todosList.map((todo) => {
                return (
                  <div key={todo.id} className="flex justify-between items-center p-4 rounded-lg bg-gray500 shadow-inner border-[1px] min-h-[72px] border-gray400 w-full">
                    <div className="flex gap-3 align-top">
                      <input
                        
                        className="m-1 w-4 h-4 border-2 border-blue border-blue-500 rounded-full bg-transparent cursor-pointer checked:bg-purple checked:border-0"
                        type="checkbox"
                        id={JSON.stringify(todo.id)}></input>
                      <label htmlFor={JSON.stringify(todo.id)} className="max-w-[632px] font-normal text-gray100 text-sm leading-6 text-left">{todo.content}</label>
                    </div>

                    <button type="button" className="flex items-center justify-center w-6 h-6" onClick={() => handleDeleteTodo(todo.id)}><img src={TrashIcon} /></button>
                  </div>
                ) 
              })
            }

          </div>


        </div>
      </div>
    </div>
  )
}

export default App
