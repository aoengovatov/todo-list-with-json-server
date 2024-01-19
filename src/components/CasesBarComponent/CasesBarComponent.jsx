import { CaseComponent } from "../CaseComponent";
import { useSelector } from "react-redux";

export const CasesBarComponent = ({ deleteTodo, updateTodo }) => {
    const todosState = useSelector((store) => store.todoState);
    let todos = todosState;
    const search = useSelector((store) => store.searchState.search);
    const isSort = useSelector((store) => store.sortState.sort);

    const searchTodos = (value) => {
        let todosSearch = [];
        value
            ? Object.values(todosState).map((todo) =>
                  todo.name.toLowerCase().includes(value.toLowerCase())
                      ? todosSearch.push(todo)
                      : null
              )
            : null;
        return todosSearch;
    };

    if (isSort) {
        todos = Object.values(todos).sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
    } else {
        todos = todosState;
    }

    if (search.length !== 0) {
        todos = { ...searchTodos(search) };
    }

    return Object.entries(todos).map(([num, todo]) => (
        <CaseComponent
            key={todo.id}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            id={todo.id}
        >
            {todo.name}
        </CaseComponent>
    ));
};
