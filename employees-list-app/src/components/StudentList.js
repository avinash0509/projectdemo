import styles from "./StudentList.module.css";
import Student from "./Student";
const StudentList = (props) => {
  return (
    <div className={styles.container}>
      {props.studentData.map((student) => (
        <Student student={student} onDeleteStudent={props.onDeleteStudent}/>
      ))}
    </div>
  );
};

export default StudentList;
