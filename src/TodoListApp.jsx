import styles from "./TodoListApp.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos, addTodos } from "./actions";
import {
    SortComponent,
    SearchComponent,
    AddNewCaseComponent,
    CasesBarComponent,
} from "./components";

export const TodoListApp = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getTodos());
        setIsLoading(false);
    }, [dispatch]);

    const addTodo = (value) => {
        if (value !== undefined && value.trim() !== "") {
            dispatch(addTodos(value));
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Todo list</h1>
            <div className={styles.topBarContainer}>
                <SortComponent />
                <SearchComponent />
            </div>

            {isLoading ? <div className={styles.loader}></div> : <CasesBarComponent />}
            <AddNewCaseComponent addTodo={addTodo} />
        </div>
    );
};
