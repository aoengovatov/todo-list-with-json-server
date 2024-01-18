export const searchReducer = (state = { search: "" }, action) => {
    switch (action.type) {
        case "GET_SEARCH":
            return state;
        case "UPDATE_SEARCH":
            return { search: action.payload };
        default:
            return state;
    }
};
