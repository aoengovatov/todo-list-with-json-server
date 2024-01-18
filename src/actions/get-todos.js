export const getTodos = () => (dispatch) => {
    return fetch("http://localhost:3005/todos")
        .then((loadedData) => loadedData.json())
        .then((loadedData) =>
            dispatch({
                type: "GET_TODOS",
                payload: loadedData,
            })
        );
};
