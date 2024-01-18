import { CaseComponent } from "../CaseComponent";
import { useSelector } from "react-redux";

export const CasesBarComponent = ({ deleteTodo, updateTodo }) => {
    const todos = useSelector((store) => store.todoState);
    console.log(todos);

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
