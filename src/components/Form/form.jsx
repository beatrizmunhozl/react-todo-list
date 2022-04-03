import { useState } from "react"
import './formStyle.css'

const Form = ({addToDo}) => {

    const [value, setValue] = useState('')
    
    return (
        <form onSubmit={(evt) => {
            evt.preventDefault()
            addToDo(value)            
            }
        }
        >
            <input type="text" value={value} onChange={
                (evt) => setValue(evt.target.value)}
                 
            />
            <button type="submit">Salvar</button>
        </form>
    )
}

export default Form