import { Trash2 } from "lucide-react";
import { Todo } from "../types/todos";

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onSub: (id: number) => void;
}

export default function TodoItem({ todo, onCompletedChange, onSub }: TodoItemProps) {
    function handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        onSub(todo.id);
    }

    return (
        <div className="flex gap-2 relative  items-center border rounded-md border-gray-400 bg-white pl-2 hover:bg-slate-50">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                className="scale-125 p-2"
            />
            <span className={todo.completed ? "line-through text-gray-400 p-2" : "p-2"}>
                {todo.title}
            </span>
            <button
                onClick={handleDelete}
                className="bg-red-600 absolute right-0 rounded-e p-2.5 text-white border-gray-400 hover:bg-red-500"
            >
                <Trash2 size={20} className="text-gray-100"/>
            </button>
        </div>
    );
}
