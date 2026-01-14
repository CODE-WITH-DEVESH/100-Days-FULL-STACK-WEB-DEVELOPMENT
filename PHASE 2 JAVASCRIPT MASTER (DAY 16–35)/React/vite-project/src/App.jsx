import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] =useState(null)


  function addStudent() {
    if (name === "") return;
    if(editIndex ==null){
      setStudents([...students,name])

    } else{
      const updatedStudents =[...students]
      updatedStudents[editIndex]=name
      setStudents(updatedStudents)
      setEditIndex(null)
    }
    setName()
  }

  function editStudents(){
    setName(students[index])
    setEditIndex(index)
  }

  function deleteStudent(indexToDelete) {
    const updatedList = students.filter((_, index) => index !== indexToDelete);
    setStudents(updatedList);

  }

  return (
    <div>
      <h2>Student List</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

       <button onClick={addStudent}>
        {editIndex === null ? "Add" : "Update"}
      </button>


      
      <ul>
        {students.map((stu, index) => (
          <li key={index}>
            {stu}
            <button onClick={() => editStudent(index)}>Edit</button>
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
