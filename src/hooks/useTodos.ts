import { useEffect, useState } from "react";
import { dumyData } from "../data/todos";
import { Todo } from "../types/todos";

export default function useTodos() {
    const [todos, setTodos] = useState(
        () => {
          const saveTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
          return saveTodos.length > 0 ? saveTodos: dumyData;
          
        }
      );
      useEffect(
        () => {
          localStorage.setItem("todos", JSON.stringify(todos));
        }
        , [todos]
      );
    
      function setTodoCompleted(id: number, completed: boolean) {
        setTodos((previousTodos) => 
          previousTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
        );
      }
    
      function deleteItem(id: number) {
        setTodos((previousTodos) => 
          previousTodos.filter(todo => todo.id !== id)
        );
      }
    
      function addTodo(title: string) {
        setTodos((previousTodos) => [
          {
            id: Date.now(),
            title,
            completed: false,
          },
          ...previousTodos,
        ]);
      }
      function deleteAllCompleted() {
        setTodos(previousTodos => previousTodos.filter(todo => !todo.completed))
      }

      return {
        todos,
        setTodoCompleted,
        deleteItem,
        addTodo,
        deleteAllCompleted
      }
}