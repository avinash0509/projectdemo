import styles from "./AddStudent.module.css";

const AddStudent = (props) => {
  let inputStudentName = "";
  const handleInput = (e) => {
    inputStudentName = e.target.value;
   
  };

  const handleClick = () => {
    props.onNewStudent(inputStudentName);
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <input type="text" onChange={handleInput} />
      </div>

      <div className={styles.btnBox}>
        <button type="button" className={styles.addBtn} onClick={handleClick}>
          Add Student
        </button>
      </div>
    </div>
  );
};
export default AddStudent;
