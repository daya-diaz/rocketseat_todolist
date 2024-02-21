import TrashIcon from '../assets/trash.png';

interface TodoProps {
    content: string,
    id: number,
    handleCheckInput: (id: number) => void,
    handleDeleteTodo: (id: number) => void,
}
export default function Todo({content, id, handleCheckInput, handleDeleteTodo} : TodoProps){
    return(
        <div className="flex justify-between items-center p-4 rounded-lg bg-gray500 shadow-inner border-[1px] min-h-[72px] border-gray400 w-full">
            <div className="flex gap-3 align-top">
                <input
                onClick={() => handleCheckInput(id)}
                className="m-1 w-4 h-4 border-2 border-blue border-blue-500 rounded-full bg-transparent cursor-pointer checked:bg-purple checked:border-0"
                type="checkbox"
                id={JSON.stringify(id)}></input>
                <label htmlFor={JSON.stringify(id)} className="max-w-[632px] font-normal text-gray100 text-sm leading-6 text-left">{content}</label>
            </div>

            <button type="button" className="flex items-center justify-center w-6 h-6" onClick={() => handleDeleteTodo(id)}><img src={TrashIcon} /></button>
        </div>
    )
}