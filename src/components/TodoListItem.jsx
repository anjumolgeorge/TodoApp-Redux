import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from '../store/slice/todoSlice';
const TodoListItem = ({item,id}) => {

  const dispatch = useDispatch()
    const [update,setUpdate] = useState(item)
    const [isEdit,setIsEdit] = useState(false)

    const remove = () => {
dispatch(removeTodo(id))
    }
    const updateList = () => {
      setIsEdit(!isEdit)
      dispatch(updateTodo({content :update ,id:id}))
    }
  return (
    <div style={{display:"flex",alignItems:"center",width:"100%"}}>
      <div className='flex items-center justify-between'>
      <input type="text" value={update} className='p-3 border rounded-lg my-1'  readOnly={isEdit? false:true } onChange={(e)=>setUpdate(e.target.value)}/>
        <button  className='p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 mx-2' onClick={()=>(setIsEdit(!isEdit))} >Edit</button>
        <button className='p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 mx-2' onClick={() => updateList ()}>Update</button>
        <button className='p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 mx-2'  onClick={() => remove()}>remove</button>
      </div>
       
    
    </div>
  );
}

export default TodoListItem;
