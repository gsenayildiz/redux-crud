import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
    //store daki verileri almak için useSelector ile abone olduk.
 const storeState = useSelector((store) => store.todoReducer);
 console.log(storeState.todos);

  return (
    <div>
      {storeState.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
