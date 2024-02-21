import { ChangeEvent, FormEvent, useState } from "react";
import Header from "./components/Header";
import TrashIcon from './assets/trash.png';
import Todo from "./components/Todo";
// import Clipboard from './assets/clipboard.png'
export interface Todo {
  id: number,
  content: string,
  isChecked: boolean
}
function App() {
  let [taskCompleted, setTaskCompleted] = useState(0)
  let [createdTasks, setCreatedTasks ] = useState(0);
  const [todosList, setTodosList] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleCreateTodo(e: FormEvent) {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newTodo = {
        content: inputValue,
        id: Math.random(),
        isChecked: false,
      }
      setTodosList(prevTodosList => [...prevTodosList, newTodo]);
      setCreatedTasks(createdTasks += 1);
      //Ajustar
      setInputValue("")
    }
  }
  function handleCheckInput(id: number) {
    //altera o valor do isChecked
    todosList.map(todo => {
      if(todo.id === id) {
        let todoSelecionado = todo;
        todoSelecionado.isChecked = !todoSelecionado.isChecked;

        if(todoSelecionado.isChecked === true) {
          setTaskCompleted(taskCompleted += 1);
        } else {
            setTaskCompleted(taskCompleted -= 1);
        }
      } 
    })

  }

  function handleDeleteTodo(id: number) {
    todosList.map(todo => {
      if(todo.id === id) {
        let todoSelecionado = todo;
        if(todoSelecionado.isChecked === true) {
          setTaskCompleted(taskCompleted -= 1);
        }
      }
    })
    const todosArray = todosList.filter(todo => {
      return todo.id !== id;
    })
    setTodosList(todosArray);
    setCreatedTasks(createdTasks -= 1);
  }
  return (
    <div className="h-screen text-white">
      <Header />
      <div className="flex flex-col fixed top-[173px] m-auto gap-16 items-center justify-center left-1/4">
        {
          //Formulario para enviar valores dos to-dos
        }
        <form onSubmit={handleCreateTodo} className="flex w-[736px] gap-2 items-center justify-center">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleChangeInput}
            value={inputValue}
            className="flex-1 max-h-[56px] p-4 bg-gray500 rounded-lg outline-none placeholder:text-gray300 focus:border-purpleDark focus:border-[1px]"
          />
          <button
            type="button"
            className="flex items-center justify-center w-[13%] py-4 rounded-lg bg-blueDark font-bold hover:bg-blue"
            onClick={handleCreateTodo}
            >
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
              <div className="px-2 py-1 bg-gray400 rounded-full text-xs text-gray200">{`${taskCompleted} de ${createdTasks}`}</div>
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
                  <Todo 
                    content={todo.content}
                    id={todo.id} 
                    handleCheckInput={() => {handleCheckInput(todo.id)}} 
                    handleDeleteTodo={() => {handleDeleteTodo(todo.id)}}
                  />
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
