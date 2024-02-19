import { ACTION_TYPE } from "../constants/action-type";

export const sortReducer = (state = { sort: false }, action) => {
    switch (action.type) {
        case ACTION_TYPE.GET_SORT:
            return state;
        case ACTION_TYPE.UPDATE_SORT:
            return { sort: action.payload };
        default:
            return state;
    }
};
