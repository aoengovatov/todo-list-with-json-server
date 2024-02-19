import styles from "./CaseComponent.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodos, deleteTodos } from "../../actions";
import { EditButtonComponent, DeleteButtonComponent } from "../../components";
import { EditConfirnPanel } from "../EditConfirnPanel/EditConfirnPanel";

export const CaseComponent = ({ id, children }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [updateValue, setUpdateValue] = useState(children);
    const dispatch = useDispatch();

    const editTodo = () => {
        setIsEdit(true);
        setUpdateValue(children);
    };

    const cancelClick = () => {
        setIsEdit(false);
    };

    const onChangeInput = ({ target }) => {
        setUpdateValue(target.value);
    };

    const updateClick = () => {
        if (updateValue !== undefined && updateValue.trim() !== "") {
            dispatch(updateTodos(id, updateValue));
        }
        setIsEdit(false);
    };

    const deleteTodo = (id) => {
        dispatch(deleteTodos(id));
    };

    return (
        <div className={styles.caseContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.label}></div>
                {isEdit ? (
                    <input
                        type="text"
                        value={updateValue}
                        className={styles.input}
                        onChange={onChangeInput}
                    ></input>
                ) : (
                    <div className={styles.title}>{children}</div>
                )}
            </div>
            <div className={styles.buttonContainer}>
                {isEdit ? (
                    <EditConfirnPanel
                        updateClick={updateClick}
                        cancelClick={cancelClick}
                    />
                ) : (
                    <>
                        <EditButtonComponent onClick={() => editTodo()} />
                        <DeleteButtonComponent onClick={() => deleteTodo(id)} />
                    </>
                )}
            </div>
        </div>
    );
};
