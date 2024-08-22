import { useState } from "react";

let nextId = 0;
console.log("%c Arrays ", "background: red; color: white; padding: 5px;");
console.log(window)
export default function Todo() {
    const [array, setArray] = useState([]);
    const [text, setText] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    function handleAdd() {
        if (text === "") return;
        setArray([...array, { id: nextId++, name: text }]);
        setText("");
    }

    function handleEditStart(todo) {
        setEditingId(todo.id);
        setEditText(todo.name);
    }

    function handleEditSave() {
        setArray(array.map(item => {
            if (item.id === editingId) {
                return {
                    ...item,
                    name: editText
                };
            }
            return item;
        }));
        setEditingId(null);
        setEditText("");
    }

    return (
        <> 
            <div className=" bg-gray-800 w-[500px] min-h-[300px] p-10 mt-[100px] mx-auto rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold my-4 bg-blue-500 text-gray-50 rounded-md py-1 text-center">Adding Tasks</h1>
                <div className="flex justify-between items-center">
                <input 
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className=" my-3 shadow-md outline-none rounded-md px-6 py-2 w-[80%]" 
                    placeholder="add task"
                />
                <button className="bg-green-500 py-2 px-4 rounded-sm shadow-md text-gray-50 font-bold" onClick={handleAdd}>Add</button>
                </div>
                <ul className="flex justify-center flex-col">
                    {array.map(item => (
                        <li className="my-1 text-blue-600 font-mono text-xl bg-yellow-100 flex items-center p-2 rounded-lg shadow-md" key={item.id}>
                            {editingId === item.id ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={e => setEditText(e.target.value)}
                                    className="p-1 bg-transparent border-2 rounded-md border-red-600 outline-none"
                                />
                            ) : (
                                <span className="ml-5 overflow-hidden text-el   lipsis whitespace-nowrap">{item.name}</span>
                            )}
                            <div className="ml-auto [&>*]:ml-2">
                            {editingId === item.id ? (
                                <button className="bg-green-500 font-bold text-white p-1 rounded shadow-lg" onClick={handleEditSave}>Save</button>
                            ) : (
                                <button className="bg-yellow-200 font-bold text-gray-400 p-1 rounded shadow-lg mx-1 " onClick={() => handleEditStart(item)}>Edit</button>
                            )}
                            <button className="bg-red-500 font-bold text-white p-1 rounded shadow-lg" onClick={() => setArray(array.filter(a => a.id !== item.id))}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
