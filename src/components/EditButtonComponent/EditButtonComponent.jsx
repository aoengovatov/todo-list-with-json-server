import styles from "./EditButtonComponent.module.css";

export const EditButtonComponent = ({ ...props }) => {
    return (
        <div className={styles.editButton} {...props}>
            <div className={styles.editIcon}></div>
        </div>
    );
};
