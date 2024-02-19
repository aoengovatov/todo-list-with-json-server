import { ACTION_TYPE } from "../constants/action-type";

export const todosReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPE.GET_TODOS:
            return { ...action.payload };
        case ACTION_TYPE.ADD_TODOS:
            return { ...state, ...action.payload };
        case ACTION_TYPE.UPDATE_TODOS:
            return {
                ...Object.values(state).filter(
                    (todo) => todo.id !== action.payload.response.id
                ),
                ...action.payload,
            };
        case ACTION_TYPE.DELETE_TODOS:
            return Object.values(state).filter((todo) => todo.id !== action.payload.id);
        default:
            return state;
    }
};
