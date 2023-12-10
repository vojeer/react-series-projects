import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: ' hello iam todo',
            completed: false
        },
    ],

    updateTodo: (id) => {},
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;