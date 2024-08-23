import "./App.css";
import AppName from "./components/AppName";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import MessageBox from "./components/MessageBox";
import { useState } from "react";
function App() {
  let [studentList, setstudentList] = useState([]);

  const handleAddNewStudent = (studentName) => {
    setstudentList([...studentList, studentName]);
  };

  const handleDeleteStudent = (studentName) => {
    setstudentList(studentList.filter((student) => student !== studentName));
  };
  return (
    <div>
      <AppName appTitle="Student" />
      <AddStudent onNewStudent={handleAddNewStudent} />
      <StudentList
        studentData={studentList}
        onDeleteStudent={handleDeleteStudent}
      />
      <MessageBox studentData={studentList} />
    </div>
  );
}

export default App;
