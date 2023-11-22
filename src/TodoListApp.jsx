import styles from './TodoListApp.module.css';
import { CaseComponent } from './components/CaseComponent/CaseComponent';
import { SortComponent } from './components/SortComponent/SortComponent';
import { SearchComponent } from './components/SearchComponent/SearchComponent';
import { AddNewCaseComponent } from './components/AddNewCaseComponent/AddNewCaseComponent';

export const TodoListApp = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Todo list</h1>
      <div className={styles.topBarContainer}>
        <SortComponent />
        <SearchComponent />
      </div>
      <CaseComponent>Новая задача</CaseComponent>
      <CaseComponent>Новая задача</CaseComponent>
      <CaseComponent>Новая задача</CaseComponent>
      <CaseComponent>Новая задача</CaseComponent>
      <CaseComponent>Новая задача</CaseComponent>
      <AddNewCaseComponent />
    </div>
  )
}
