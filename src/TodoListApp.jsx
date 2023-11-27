import styles from './TodoListApp.module.css';
import { useState } from 'react';
import { useRequestGetTodos, useRequestDeleteTodo } from './hooks';
import {
  CaseComponent, 
  SortComponent, 
  SearchComponent, 
  AddNewCaseComponent 
  } from './components';

export const TodoListApp = () => {
  
  const [todosSearch, setTodosSearch] = useState([]);
  const [refreshTodos, setRefreshTodos] = useState(false);
  const [isSortTodos, setIsSortTodos] = useState(false);
  const {isLoading, todos} = useRequestGetTodos(isSortTodos, refreshTodos);

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
    useRequestDeleteTodo(id, setRefreshTodos, refreshTodos);
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
