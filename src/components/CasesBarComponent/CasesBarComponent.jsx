import { selectTodos, selectSearch, selectSort } from "../../selectors";
import { CaseComponent } from "../CaseComponent";
import { useSelector } from "react-redux";

export const CasesBarComponent = () => {
    const todosState = useSelector(selectTodos());
    let todos = [];
    const search = useSelector(selectSearch());
    const isSort = useSelector(selectSort());

    const searchTodos = (value) => {
        let todosSearch = [];
        value
            ? todos.map((todo) =>
                  todo.name.toLowerCase().includes(value.toLowerCase())
                      ? todosSearch.push(todo)
                      : null
              )
            : null;
        return todosSearch;
    };

    const getSortTodos = (todos) => {
        return todos.sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
    };

    if (isSort) {
        todos = getSortTodos([...todosState]);
    } else {
        todos = todosState;
    }

    if (search.length !== 0) {
        todos = searchTodos(search);
    }

    return todos.map((todo) => (
        <CaseComponent key={todo.id} id={todo.id}>
            {todo.name}
        </CaseComponent>
    ));
};
