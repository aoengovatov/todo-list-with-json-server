import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { todosReducer } from "../reducers/todos-reducer";

const reducer = combineReducers({
    todoState: todosReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
