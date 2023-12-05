import styles from './SortComponent.module.css';
import { SortContext } from '../../SortContext';
import { useContext } from 'react';

export const SortComponent = ({ setSort }) => {
    const isSort = useContext(SortContext);

    return (
        <div className={styles.container}>
            <button 
                className={`${styles.buttonSearch} 
                ${!isSort ? styles.active : ""}`}
                onClick={() => isSort === true ? setSort(false) : false}
            >
                по умолчанию
            </button>
            <button 
                className={`${styles.buttonSearch} 
                ${isSort ? styles.active : ""}`}
                onClick={() => isSort === false ? setSort(true) : false}
            >
                по алфавиту
            </button>
        </div>
    )
}