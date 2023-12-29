import { CaseComponent } from "../CaseComponent";
import { TodosContext } from "../../TodosContext";
import { useContext } from "react";

export const CasesBarComponent = ({ deleteTodo, updateTodo }) => {
    const todos = useContext(TodosContext);

    return todos.map(({ id, name }) => (
        <CaseComponent key={id} deleteTodo={deleteTodo} updateTodo={updateTodo} id={id}>
            {name}
        </CaseComponent>
    ));
};
