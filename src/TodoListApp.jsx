import styles from "./TodoListApp.module.css";
import { useState } from "react";
import { SortContext } from "./SortContext";
import { TodosContext } from "./TodosContext";
import {
    useRequestGetTodos,
    useRequestDeleteTodo,
    useRequestUpdateTodo,
    useRequestAddTodo,
} from "./hooks";
import {
    SortComponent,
    SearchComponent,
    AddNewCaseComponent,
    CasesBarComponent,
} from "./components";

export const TodoListApp = () => {
    const [searchTodos, setSearchTodos] = useState([]);
    const [refreshTodos, setRefreshTodos] = useState(false);
    const [isSortTodos, setIsSortTodos] = useState(false);
    const { isLoading, todos } = useRequestGetTodos(isSortTodos, refreshTodos);
    let todosOut = [];

    const addTodo = (value) => {
        if (value !== undefined && value.trim() !== "") {
            useRequestAddTodo(value, setRefreshTodos, refreshTodos);
        }
    };

    const deleteTodo = (id) => {
        useRequestDeleteTodo(id, setRefreshTodos, refreshTodos);
    };

    const updateTodo = (id, name) => {
        if (name !== undefined && name.trim() !== "") {
            useRequestUpdateTodo(id, name, setRefreshTodos, refreshTodos);
        }
    };

    const setSortTodos = (value) => {
        setIsSortTodos(value);
        setRefreshTodos(!refreshTodos);
    };

    const updateTodos = () => {
        if (searchTodos.length !== 0) {
            todosOut = searchTodos;
        } else {
            todosOut = todos;
        }
    };

    const setSearchValue = (value) => {
        let todosSearch = [];
        value
            ? todos.map((todo) =>
                  todo.name.toLowerCase().includes(value.toLowerCase())
                      ? todosSearch.push(todo)
                      : null
              )
            : null;
        setSearchTodos(todosSearch);
    };

    updateTodos();

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Todo list</h1>
            <div className={styles.topBarContainer}>
                <SortContext.Provider value={isSortTodos}>
                    <SortComponent setSort={setSortTodos} />
                </SortContext.Provider>

                <SearchComponent setSearchValue={setSearchValue} />
            </div>

            {isLoading ? (
                <div className={styles.loader}></div>
            ) : (
                <TodosContext.Provider value={todosOut}>
                    <CasesBarComponent deleteTodo={deleteTodo} updateTodo={updateTodo} />
                </TodosContext.Provider>
            )}

            <AddNewCaseComponent addTodo={addTodo} />
        </div>
    );
};
