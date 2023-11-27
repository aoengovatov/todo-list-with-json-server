import { useEffect, useState } from "react";

export const useRequestGetTodos = (isSortTodos, refreshTodos) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3005/todos")
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => {
        if (isSortTodos) {
          setTodos(
            loadedTodos.sort((a, b) =>
              a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            )
          );
        } else {
          setTodos(loadedTodos);
        }
      })
      .finally(() => setIsLoading(false));
  }, [refreshTodos]);

  return {
    isLoading,
    todos,
  };
};
