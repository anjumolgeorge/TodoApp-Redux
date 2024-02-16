// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "./store/slice/todoSlice";
// import TodoListItem from "./components/TodoListItem";

// function App() {
//   // const backgroundstyle={
//   //   backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg')",
//   //   backgroundSize :'cover',
//   //   backgroundPosition: 'center',
//   //   minheight:'100vh',
//   //   display: 'flex',
//   //   flexDirection:'column',
//   //   alignItem:'center',
//   // }
//   const todo = useSelector((store) => store.todo.todoList);
//   const dispatch = useDispatch();

//   const [text, setText] = useState("");

//   const add = () => {
//     if(text === "") {
//       alert("type somthing")
//     }
//     else{
      
//       dispatch(addTodo({content : text,id:Date.now()}));
//     }
//   };
//   return (
//     <div>
      
//     <div className=" h-screen flex flex-col items-center  bg-red-300" >
//                 <p style={{paddingTop:'85px',fontSize:'55px',color:"#1D2B53",fontFamily:"cursive"}}><b>Todo List</b></p> 

//         <div style={{background:"#7E2553"}} className="p-4 rounded-2xl w-[50%]">
//         <div>
//           <div className="flex items-center">
//             <input type="text" className="p-3 border rounded-lg w-full " onChange={(e) => setText(e.target.value)} />
//             <button
//               className="p-3 bg-blue-500 text-white mx-3 rounded-lg hover:bg-blue-700"
//               onClick={() => add()}
//             >
//               ADD
//             </button>
//           </div>
//         </div>
       
    
//       </div>
//       <div className="flex items-start justify-center h-full">
//         <div className=" my-4">
//           {todo.map((item) => (
//             <TodoListItem item={item.content}  id={item.id} key={item.id}/>
//           ))}
//         </div>
//         </div>
//     </div>
//     </div>
//   );
// }

// export default App;


import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/slice/todoSlice";
import TodoListItem from "./components/TodoListItem";

function App() {
  const todo = useSelector((store) => store.todo.todoList);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const add = () => {
    if (text === "") {
      alert("type something");
    } else {
      dispatch(addTodo({ content: text, id: Date.now() }));
    }
  };

  const backgroundstyle = {
    backgroundImage: "url('https://c1.wallpaperflare.com/preview/936/569/227/old-retro-antique-vintage.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const titleStyle = {
    paddingTop: '85px',
    fontSize: '55px',
    color: "#1D2B53",
    fontFamily: "cursive",
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={backgroundstyle}>
      <div className="h-screen flex flex-col items-center">
        <p style={titleStyle}>Todo List</p>

        <div style={{ background: "#706233", width:"310px" }} className="p-4 rounded-2xl w-[50%]">
          <div className="flex items-center">
            <input
              type="text"
              className="p-3 border rounded-lg w-64" 
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="p-3 bg-blue-500 text-white mx-3 rounded-lg hover:bg-blue-700"
              onClick={() => add()}
            >
              ADD
            </button>
          </div>
        </div>

        <div className="flex items-start justify-center h-full">
          <div className="my-4">
            {todo.map((item) => (
              <TodoListItem item={item.content} id={item.id} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
