import styles from './DeleteCaseComponent.module.css';

export const DeleteCaseComponent = ({ deleteTodo, id }) => {
   
    return (
        <div className={styles.deleteButton} onClick={() => deleteTodo(id)}>
            <div className={styles.deleteIcon}></div>
        </div>
    )
}