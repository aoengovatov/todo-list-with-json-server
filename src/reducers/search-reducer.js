import { ACTION_TYPE } from "../constants/action-type";

export const searchReducer = (state = { search: "" }, action) => {
    switch (action.type) {
        case ACTION_TYPE.GET_SEARCH:
            return state;
        case ACTION_TYPE.UPDATE_SEARCH:
            return { search: action.payload };
        default:
            return state;
    }
};
