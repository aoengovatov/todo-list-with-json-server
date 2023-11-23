import styles from './DeleteCaseComponent.module.css';

export const DeleteCaseComponent = ({ deleteTodo, id }) => {
    const onClick = () => {
        deleteTodo(id);
    }

    return (
        <div className={styles.deleteButton} onClick={onClick}>
            <div className={styles.deleteIcon}></div>
        </div>
    )
}