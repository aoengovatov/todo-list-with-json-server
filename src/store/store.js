import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { todosReducer, searchReducer, sortReducer } from "../reducers/todos-reducer";

const reducer = combineReducers({
    todoState: todosReducer,
    searchState: searchReducer,
    sortState: sortReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
