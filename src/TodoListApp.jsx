import styles from './TodoListApp.module.css';
import { useState, useEffect } from 'react';
import { CaseComponent } from './components/CaseComponent/CaseComponent';
import { SortComponent } from './components/SortComponent/SortComponent';
import { SearchComponent } from './components/SearchComponent/SearchComponent';
import { AddNewCaseComponent } from './components/AddNewCaseComponent/AddNewCaseComponent';

export const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    //setIsLoading(true);

    fetch('http://localhost:3005/todos')
        .then((loadedData) => loadedData.json())
        .then((loadedTodos) => {
          setTodos(loadedTodos)
        });
        //.finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Todo list</h1>
      <div className={styles.topBarContainer}>
        <SortComponent />
        <SearchComponent />
      </div>

      {todos.map(({id, name}) => 
      (
        <CaseComponent key={id}>{name}</CaseComponent>
      ))}
      
      <AddNewCaseComponent />
    </div>
  )
}
