import styles from "./DeleteButtonComponent.module.css";

export const DeleteButtonComponent = ({ ...props }) => {
    return (
        <div className={styles.deleteButton} {...props}>
            <div className={styles.deleteIcon}></div>
        </div>
    );
};
