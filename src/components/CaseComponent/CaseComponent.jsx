import styles from './CaseComponent.module.css';

export const CaseComponent = ({ children }) => {

    return (
        <div className={styles.caseContainer}>
            <div className={styles.label}></div>
            <div className={styles.title}>{children}</div>
        </div>
    );
}