import styles from './CaseComponent.module.css';
import { useState } from 'react';
import { EditButtonComponent } from '../EditButtonComponent/EditButtonComponent';
import { DeleteButtonComponent } from '../DeleteButtonComponent/DeleteButtonComponent';
//import { EditCaseComponent } from '../EditCaseComponent/EditCaseComponent';

export const CaseComponent = ({ deleteTodo, updateTodo, id, children }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [updateValue, setUpdateValue] = useState(children);

    const editTodo = () => {
        console.log('редактируем задачу');
        setIsEdit(true);
        setUpdateValue(children);
    }

    const cancleClick = () => {
        setIsEdit(false);
    }

    const onChangeInput = ({ target }) => {
        setUpdateValue(target.value);
    }

    const updateCase = () => {
        setIsEdit(false);
        updateTodo(id, updateValue);
    }

    return (
            <div className={styles.caseContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.label}></div>
                    {isEdit ? (<input value={updateValue} className={styles.input} onChange={onChangeInput}></input>) : (<div className={styles.title}>{children}</div>)}
                </div>
                <div className={styles.buttonContainer}>
                    {isEdit ? (
                        <>
                            <button className={styles.actionButton} onClick={updateCase}>ОК</button>
                            <button className={styles.actionButton} onClick={cancleClick}>Отмена</button>
                        </>
                        
                    ) : (
                        <>
                            <EditButtonComponent editTodo={editTodo} />
                            <DeleteButtonComponent deleteTodo={deleteTodo} id={id}/>
                        </>
                    )}
                </div>
            </div>
        )
}