import { ACTION_TYPE } from "../constants/action-type";

export const deleteTodos = (id) => (dispatch) => {
    return fetch(`http://localhost:3005/todos/${id}`, {
        method: "DELETE",
    })
        .then((rawResponse) => rawResponse.json())
        .then((response) => {
            console.log("Задача обновлена, ответ сервера:", response);
            dispatch({
                type: ACTION_TYPE.DELETE_TODOS,
                payload: { id },
            });
        });
};
