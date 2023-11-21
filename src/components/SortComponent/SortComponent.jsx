import styles from './SortComponent.module.css';

export const SortComponent = () => {
    return (
        <div className={styles.container}>
            <button className={styles.buttonSearch}>по умолчанию</button>
            <button className={styles.buttonSearch}>по алфавиту</button>
        </div>
    )
}