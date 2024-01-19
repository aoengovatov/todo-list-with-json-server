export const todosReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_TODOS":
            return { ...action.payload };
        case "ADD_TODOS":
            return { ...state, ...action.payload };
        case "UPDATE_TODOS":
            return {
                ...Object.values(state).filter(
                    (todo) => todo.id !== action.payload.response.id
                ),
                ...action.payload,
            };
        case "DELETE_TODOS":
            return Object.values(state).filter((todo) => todo.id !== action.payload.id);
        default:
            return state;
    }
};
