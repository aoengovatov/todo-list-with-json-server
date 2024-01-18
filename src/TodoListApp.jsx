import styles from "./TodoListApp.module.css";
import { useState, useEffect } from "react";
import { SortContext } from "./SortContext"; //заменить на store
import { useDispatch, useSelector } from "react-redux";
import { getTodos, addTodos, updateTodos, deleteTodos } from "./actions";
import {
    SortComponent,
    SearchComponent,
    AddNewCaseComponent,
    CasesBarComponent,
} from "./components";

export const TodoListApp = () => {
    const dispatch = useDispatch();
    //const [searchTodos, setSearchTodos] = useState([]);
    //const [isSortTodos, setIsSortTodos] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    //let todosOut = [];

    useEffect(() => {
        dispatch(getTodos());
        setIsLoading(false);
    }, []);

    const addTodo = (value) => {
        if (value !== undefined && value.trim() !== "") {
            dispatch(addTodos(value));
        }
    };

    const deleteTodo = (id) => {
        dispatch(deleteTodos(id));
    };

    const updateTodo = (id, name) => {
        if (name !== undefined && name.trim() !== "") {
            dispatch(updateTodos(id, name));
        }
    };

    /*const setSortTodos = (value) => {
        setIsSortTodos(value);
        //setRefreshTodos(!refreshTodos);
    };*/

    /*const updatedTodos = () => {
        if (searchTodos.length !== 0) {
            todosOut = searchTodos;
        } else {
            todosOut = useSelector((store) => store.todoState);
        }
    };*/

    const setSearchValue = (value) => {
        let todosSearch = [];
        value
            ? useSelector((store) => store.todoState).map((todo) =>
                  todo.name.toLowerCase().includes(value.toLowerCase())
                      ? todosSearch.push(todo)
                      : null
              )
            : null;
        setSearchTodos(todosSearch);
    };

    //updatedTodos();

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Todo list</h1>
            <div className={styles.topBarContainer}>
                <SortComponent />
                <SearchComponent/>
            </div>

            {isLoading ? (
                <div className={styles.loader}></div>
            ) : (
                <CasesBarComponent deleteTodo={deleteTodo} updateTodo={updateTodo} />
            )}
            <AddNewCaseComponent addTodo={addTodo} />
        </div>
    );
};
