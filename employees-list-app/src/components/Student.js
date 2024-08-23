import styles from "./Student.module.css";

const Student = (props) => {
  return (
<div className={styles.row}>
<div className={styles.listGroup}>
  <strong>{props.student}</strong>
</div>
<div className={styles.listGroup2}>
  <button className={styles.delButton} onClick={() => {
    props.onDeleteStudent(props.student);
  }}>Delete</button>
</div>
</div>
  );
};

export default Student;
