export const sortReducer = (state = { sort: false }, action) => {
    switch (action.type) {
        case "GET_SORT":
            return state;
        case "UPDATE_SORT":
            return { sort: action.payload };
        default:
            return state;
    }
};
