import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice ({
    name:"todo",
    initialState : {
        todoList : []
    },
    reducers : {
        addTodo : (state,actions) => {
            console.log(actions.payload);
       state.todoList.push({content :actions.payload.content,id:actions.payload.id})


        },
        removeTodo :(state,actions) =>{
            console.log(actions.payload);
          state.todoList = state.todoList.filter((item) => item.id != actions.payload)
       

        }
        ,
        updateTodo : (state,actions) => {
            console.log(actions.payload);
            const updateList = state.todoList.map((item) => item.id === actions.payload ? item.content = actions.content :item)
            state.todoList =updateList
        }
    }
})
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer