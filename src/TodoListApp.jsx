import styles from './TodoListApp.module.css';
import { useState, useEffect } from 'react';
import { CaseComponent } from './components/CaseComponent/CaseComponent';
import { SortComponent } from './components/SortComponent/SortComponent';
import { SearchComponent } from './components/SearchComponent/SearchComponent';
import { AddNewCaseComponent } from './components/AddNewCaseComponent/AddNewCaseComponent';

export const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  const [refreshTodos, setRefreshTodos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSortTodos, setIsSortTodos] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);

    fetch('http://localhost:3005/todos')
        .then((loadedData) => loadedData.json())
        .then((loadedTodos) => {
          setTodos(loadedTodos)
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

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Todo list</h1>
      <div className={styles.topBarContainer}>
        <SortComponent isSort={isSortTodos} setSort={setIsSortTodos}/>
        <SearchComponent />
      </div>

      {isLoading ? (<div className={styles.loader}></div>) : (
        todos.map(({id, name}) => 
      (
        <CaseComponent 
          key={id} 
          deleteTodo={deleteTodo} 
          updateTodo={updateTodo} 
          id={id}>{name}
        </CaseComponent>
      )
      ))}
      
      <AddNewCaseComponent addTodo={addTodo} />
    </div>
  )
}
