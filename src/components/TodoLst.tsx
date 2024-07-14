import { Todo } from "../types/todos";
import TodoItem from "./TodoItem";

interface todoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onSub: (id: number) => void;
}

export default function todoList({todos, onCompletedChange, onSub}: todoListProps) {
    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
          return b.id - a.id;
        }
        return a.completed ? 1 : -1;
      });    
    return(
       <>
        <div className="space-y-2">
          {todosSorted.map(todo => (
            <TodoItem 
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onSub={onSub}/>
          ))}
        </div>
        {
            todos.length === 0 && (
                <p className="text-center text-sm text-gray-500">
                    No todos yet.  Add a one above 
                </p>
            )
        }
       </> 
        
    )
}