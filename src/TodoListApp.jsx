import styles from './TodoListApp.module.css';
import { CaseComponent } from './components/CaseComponent/CaseComponent';
import { SortComponent } from './components/SortComponent/SortComponent';
import { SearchComponent } from './components/SearchComponent/SearchComponent';

export const TodoListApp = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Список дел</h1>
      <div className={styles.topBarContainer}>
        <SortComponent />
        <SearchComponent />
      </div>
      <CaseComponent>Подготовить новый стиль</CaseComponent>
      <button className={styles.buttonAdd}>добавить</button>
    </div>
  )
}

