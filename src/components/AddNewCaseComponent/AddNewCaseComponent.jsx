import styles from './AddNewCaseComponent.module.css';

export const AddNewCaseComponent = () => {
    return (
        <div className={styles.container}>
            <input type='text' className={styles.input} placeholder='Новая задача'></input>
            <button className={styles.buttonAdd}>добавить</button>
        </div>
    )
}