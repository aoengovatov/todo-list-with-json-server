export const updateTodos = (id, name) => (dispatch) => {
    return fetch(`http://localhost:3005/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
            name: `${name.trim()}`,
        }),
    })
        .then((rawResponse) => rawResponse.json())
        .then((response) => {
            console.log("Задача обновлена, ответ сервера:", response);
            dispatch({
                type: "UPDATE_TODOS",
                payload: { response },
            });
        });
};
