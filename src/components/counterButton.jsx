import React from 'react'
import { useDispatch } from 'react-redux'
import { incremenet,reset,addMore } from '../store/counter/counterSlice'

function counterButton() {
    const dispatch=useDispatch()
  return (
   <>
   
   <button onClick={()=>dispatch(incremenet())}>Sayaç Arttır</button>
     <br />
     <button onClick={()=>dispatch(reset())}>Resetle</button>
    <br />
    <button onClick={()=>dispatch(addMore({item:22,data:10}))}>Ekle(22-10)</button>
   </>
  )
}

export default counterButton