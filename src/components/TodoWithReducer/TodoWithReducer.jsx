import { useReducer, useState , useEffect} from "react";
import reducer from "./reducer";


export default function TodoWithReducer() {

const [todos, dispatch] = useReducer(reducer, [], () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
});
const [text, setText] = useState("");


  // Save todos to localStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  function addTodo() {
    if(text){
      dispatch({
        type: "add",
        text: text,
      });
    }
    setText(""); // Clear the input after adding a todo
  }

  function editTodo(todo) {
    dispatch({
      type: "edit",
      todo: todo,
    });
  }


  function saveTodo(todo) {
    dispatch({
      type: "save",
      todo: todo,
    });
  }

  function deleteTodo(todo) {
    dispatch({
      type: "delete",
      todo: todo,
    });
  }

  function done(todo){
    dispatch({
      type: "done",
      todo:todo,
 
    })
  }

  return (
    <>
      <ul className="bg-purple-600 w-[500px] min-h-[300px] flex flex-col p-10 mx-auto mt-[15vh] rounded-md shadow-lg border ">
        <h1 className="text-center text-3xl font-semibold mb-4 py-1 bg-pink-500 border rounded-md text-gray-200">Tasks</h1>
      <div className="flex justify-around mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-2 py-1 shadow-lg rounded-md w-[70%] outline-none border border-black"
        />
        <button className="bg-pink-600 text-gray-200 p-1  px-3 rounded-md border " onClick={addTodo}>Add</button>
      </div>
        {todos.map((todo) => (
          <li key={todo.id} className={`mx-4 my-1 flex justify-between  bg-purple-400  p-2  text-lg rounded-md shadow-md border ${todo.text.length > 20 ? `flex-col` : `items-center`}`}> 
            <div className="">
              <input className="w-4 h-4 " checked={todo.isDone} onChange={() => done({...todo , isDone: !todo.isDone })} type="checkbox" />
              {todo.isEditing ? (
                <input onChange={(e) => editTodo({ ...todo, text: e.target.value }) } className="ml-[2px] outline-none border border-black rounded-md pl-1" type="text" value={todo.text} />
              ) : (
                <span  className={todo.isDone ? "mx-1 line-through break-words" : "mx-1 break-words"}>{todo.text}</span>
              )}
            </div>
            <div className="inline-block [&>button]:mx-1 ">
              {todo.isEditing ? (
                <button onClick={() => saveTodo(todo)} className="p-1 px-2 text-gray-100 border rounded-md bg-purple-700 hover:bg-yellow-500 transition-all">
                  Save
                </button>
              ) : (
                <button onClick={() => editTodo(todo)} className="p-1 px-3 text-gray-100 border rounded-md bg-purple-700 hover:bg-yellow-500 transition-all disabled:opacity-80 disabled:bg-purple-950" disabled={todo.isDone ? true : false}>
                  Edit
                </button>
              )}
              <button className="bg-pink-500 text-gray-200 p-1 rounded-md border hover:bg-red-500 transition-all" onClick={() => deleteTodo(todo)}>Delete</button>
            </div>
          </li>
        ))}
          <div className="flex items-center justify-around [&>h2]:text-gray-100">
            <h2 className="">{todos.length} {todos.length > 1 ? "Tasks" : "Task"}</h2>
            <h2>Done {todos.filter(todo => todo.isDone).length}</h2>
          </div>
      </ul>
    </>
  );
}
