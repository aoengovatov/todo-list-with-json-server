import { ACTION_TYPE } from "../../constants/action-type";
import styles from "./SortComponent.module.css";
import { useSelector, useDispatch } from "react-redux";

export const SortComponent = () => {
    const dispatch = useDispatch();
    const isSort = useSelector((store) => store.sortState.sort);

    const updateSortValue = (value) => {
        dispatch({
            type: ACTION_TYPE.UPDATE_SORT,
            payload: value,
        });
    };

    return (
        <div className={styles.container}>
            <button
                className={`${styles.buttonSearch} 
                ${!isSort ? styles.active : ""}`}
                onClick={() => (isSort === true ? updateSortValue(false) : false)}
            >
                по умолчанию
            </button>
            <button
                className={`${styles.buttonSearch} 
                ${isSort ? styles.active : ""}`}
                onClick={() => (isSort === false ? updateSortValue(true) : false)}
            >
                по алфавиту
            </button>
        </div>
    );
};
