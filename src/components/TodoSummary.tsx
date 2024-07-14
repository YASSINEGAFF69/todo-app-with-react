import { Todo } from "../types/todos";

interface TodoSummaryProps{
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({
    todos,
    deleteAllCompleted
}: TodoSummaryProps){
    const completedTodos = todos.filter(todo => todo.completed);

    return(
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length}/{todos.length} todos completed
            </p>
            {completedTodos.length > 0 && (
                <button 
                className="rounded-md bg-red-600 p-2 text-gray-50 text-sm hover:bg-red-500 font-medium"
                onClick={deleteAllCompleted}>
                Delete all completed 
                </button>
            )}
        </div>
    )

}