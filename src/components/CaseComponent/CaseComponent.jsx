import styles from './CaseComponent.module.css';
import { EditButtonComponent } from '../EditButtonComponent/EditButtonComponent';
import { DeleteButtonComponent } from '../DeleteButtonComponent/DeleteButtonComponent';

export const CaseComponent = ({ deleteTodo, id, children }) => {

    return (
        <div className={styles.caseContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.label}></div>
                <div className={styles.title}>{children}</div>
            </div>
            <div className={styles.buttonContainer}>
                <EditButtonComponent />
                <DeleteButtonComponent deleteTodo={deleteTodo} id={id}/>
            </div>
        </div>
    );
}