import './toDoListStyle.css'

const ToDoList = ({toDo, handleToDo}) => {

    return (
        <ul>
            {toDo.map((element) => {
                return(
                   <li key={element}>
                       <p>{element}</p>
                       <button onClick={() => handleToDo(element)}>X</button>
                   </li> 
                )}
            )}
        </ul>
    )
}

export default ToDoList