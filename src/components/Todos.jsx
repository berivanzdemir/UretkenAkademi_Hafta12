import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../store/todo/todoSlice"


function Todos() {
const todos=useSelector(state=>state.todos)
const dispatch=useDispatch()
    console.log("data var mı?");
  return (
    <>
    <ul>
        {
            todos?.map((item,index)=>
<li key={index} onClick={()=>dispatch(removeTodo(index))}>
    {item}
</li>)

            }
        
    </ul>
    
    </>
  )
}

export default Todos