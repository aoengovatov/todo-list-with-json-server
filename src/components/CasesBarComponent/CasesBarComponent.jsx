import { selectTodos, selectSearch, selectSort } from "../../selectors";
import { CaseComponent } from "../CaseComponent";
import { useSelector } from "react-redux";

export const CasesBarComponent = () => {
    const todosState = useSelector(selectTodos());
    let todos = todosState;
    const search = useSelector(selectSearch());
    const isSort = useSelector(selectSort());

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
            id={todo.id}
        >
            {todo.name}
        </CaseComponent>
    ));
};
