let nextId = 0;

export default function reducer(todos, action) {
  switch (action.type) {
    case "add":
      return [...todos, { id: nextId++, text: action.text, isEditing: false , isDone:false}];

    case "edit":
      return todos.map((todo) => {
        if (todo.id === action.todo.id) {
          return { ...action.todo, isEditing: true };
        }
        return { ...todo, isEditing: false};
      });

    case "save":
      return todos.map((todo) => {
        if (todo.id === action.todo.id) {
          return { ...action.todo, isEditing: false };
        }
        return todo;
      });
    case "done":
      return todos.map((todo) => {
        if(todo.id === action.todo.id){
          return {...action.todo , isDone:action.todo.isDone}
        }
        return todo
      })
    case "delete":
      return todos.filter((todo) => todo.id !== action.todo.id);

    default: todos;
  }
}
