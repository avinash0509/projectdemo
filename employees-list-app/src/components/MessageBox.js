import styles from "./MessageBox.module.css";
const MessageBox = (props) => {
  if (props.studentData.length === 0) {
    return (
      <div className={styles.container}>
        <p className={styles.text}>No Student Are Available.</p>
      </div>
    );
  } else {
    return null;
  }
};

export default MessageBox;
