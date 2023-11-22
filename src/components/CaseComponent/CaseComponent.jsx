import styles from './CaseComponent.module.css';
import { EditCaseComponent } from '../EditCaseComponent/EditCaseComponent';
import { DeleteCaseComponent } from '../DeleteCaseComponent/DeleteCaseComponent';

export const CaseComponent = ({ children }) => {

    return (
        <div className={styles.caseContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.label}></div>
                <div className={styles.title}>{children}</div>
            </div>
            <div className={styles.buttonContainer}>
                <EditCaseComponent />
                <DeleteCaseComponent />
            </div>
        </div>
    );
}