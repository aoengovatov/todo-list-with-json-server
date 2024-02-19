import styles from "./EditConfirnPanel.module.css";

export const EditConfirnPanel = ({ updateClick, cancelClick }) => {
    return (
        <>
            <button className={styles.actionButton} onClick={updateClick}>
                ОК
            </button>
            <button className={styles.actionButton} onClick={cancelClick}>
                Отмена
            </button>
        </>
    );
};
