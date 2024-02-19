import { ACTION_TYPE } from "../../constants/action-type";
import styles from "./SearchComponent.module.css";
import { useDispatch } from "react-redux";

export const SearchComponent = () => {
    const dispatch = useDispatch();

    const updateSearchState = (value) => {
        dispatch({
            type: ACTION_TYPE.UPDATE_SEARCH,
            payload: value,
        });
    };

    return (
        <>
            <input
                type="search"
                placeholder="поиск"
                className={styles.input}
                onChange={({ target }) => updateSearchState(target.value)}
            ></input>
        </>
    );
};
