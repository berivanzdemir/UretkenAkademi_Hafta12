import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo/todoSlice";

function AddTodo() {
    const dispatch= useDispatch()

    function handleSubmit(event){
event.preventDefault()
const inputValue=event.target.elements[0].value
dispatch(addTodo(inputValue))
event.target.reset()
    }
  return (
  <>
  <form onSubmit={handleSubmit}></form>
  <input type="text" placeholder="add todo bilgisini giriniz"/>
  <button type="submit">Ekle</button>
  </>
  )
}

export default AddTodo