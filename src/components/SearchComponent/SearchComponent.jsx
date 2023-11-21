import styles from './SearchComponent.module.css';

export const SearchComponent = () => {
    return (
        <div className={styles.searchContainer}>
            <input type="search" placeholder='поиск' className={styles.input}></input>
        </div>
    )
}