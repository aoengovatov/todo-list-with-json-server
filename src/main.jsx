import React from "react";
import ReactDOM from "react-dom/client";
import { TodoListApp } from "./TodoListApp.jsx";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <TodoListApp />
        </Provider>
    </React.StrictMode>
);
