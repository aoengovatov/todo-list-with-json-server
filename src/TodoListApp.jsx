import styles from './TodoListApp.module.css';
import { useState, useEffect } from 'react';
import { 
  CaseComponent, 
  SortComponent, 
  SearchComponent, 
  AddNewCaseComponent 
  } from './components';

export const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  const [todosSearch, setTodosSearch] = useState([]);
  const [refreshTodos, setRefreshTodos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSortTodos, setIsSortTodos] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);

    fetch('http://localhost:3005/todos')
        .then((loadedData) => loadedData.json())
        .then((loadedTodos) => {
          if (isSortTodos) {
            setTodos(loadedTodos
              .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())));
          } else {
            setTodos(loadedTodos);
          }
        })
        .finally(() => setIsLoading(false));
  }, [refreshTodos]);

  const addTodo = (value) => {
    if (value !== undefined && value.trim() !== '') {
      fetch('http://localhost:3005/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                name: `${value.trim()}`,
            }),
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log('Новая задача добавлена, ответ сервера:', response);
                setRefreshTodos(!refreshTodos);
            })
    }
  }

  const deleteTodo = (id) => {
    fetch(`http://localhost:3005/todos/${id}`, {
            method: 'DELETE',
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log('Задача удалена, ответ сервера: ', response);
                setRefreshTodos(!refreshTodos);
            });
  }

  const updateTodo = (id, name) => {
    if (name !== undefined && name.trim() !== '') {
      fetch(`http://localhost:3005/todos/${id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json;charset=utf-8' },
              body: JSON.stringify({
                  name: `${name.trim()}`,
              }),
          })
              .then((rawResponse) => rawResponse.json())
              .then((response) => {
                  console.log('Задача обновлена, ответ сервера:', response);
                  setRefreshTodos(!refreshTodos);
              });
    }
  }

  const setSortTodos = (value) => {
    setIsSortTodos(value);
    setRefreshTodos(!refreshTodos);
  }

  const setSearchValue = (value) => {
    let searchTodos = [];

    if (value !== '') {
      todos.map(todo => 
        todo.name.toLowerCase().includes(value.toLowerCase()) 
          ? searchTodos.push(todo) 
          : false
      );
    }
    setTodosSearch(searchTodos);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Todo list</h1>
      <div className={styles.topBarContainer}>
        <SortComponent isSort={isSortTodos} setSort={setSortTodos}/>
        <SearchComponent setSearchValue={setSearchValue}/>
      </div>

      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        todosSearch.length !== 0 ? todosSearch.map(({id, name}) => 
       (
          <CaseComponent 
            key={id} 
            deleteTodo={deleteTodo} 
            updateTodo={updateTodo} 
            id={id}>{name}
          </CaseComponent>
        )) : (
          todos.map(({id, name}) => 
          (
            <CaseComponent 
              key={id} 
              deleteTodo={deleteTodo} 
              updateTodo={updateTodo} 
              id={id}>{name}
            </CaseComponent>
          )            
        ))
      )}
      
      <AddNewCaseComponent addTodo={addTodo} />
    </div>
  )
}
