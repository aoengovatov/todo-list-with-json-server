import { ACTION_TYPE } from "../constants/action-type";

export const getTodos = () => (dispatch) => {
    return fetch("http://localhost:3005/todos")
        .then((loadedData) => loadedData.json())
        .then((loadedData) =>
            dispatch({
                type: ACTION_TYPE.GET_TODOS,
                payload: loadedData,
            })
        );
};
