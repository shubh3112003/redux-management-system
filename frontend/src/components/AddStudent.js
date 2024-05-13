import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//axios use fro sent data from frontend to backend


 function AddStudent(){
  
  let [name, setName] = useState("");
  const [age,setAge] = useState("");
  const [gender,setGender] = useState("");

  function sendData(e){
    e.preventDefault();

    const newStudent = {

      name,
      age,
      gender
    }

    axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
      alert("Student Added")
    }).catch((err)=>{
      alert(err)
    })
   
  }

    return(
        <div className="container">

<form onSubmit={sendData}>

  <div className="mb-3">
    <label for="name" className="form-label">Student Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter here"
    onChange={(e)=>{

      setName(e.target.value);

    }}/>
    
  </div>

  <div className="mb-3">
    <label for="age" className="form-label">Student Age</label>
    <input type="text" className="form-control" id="age"placeholder="Enter here"
     onChange={(e)=>{

      setAge(e.target.value);
    }}/>
    
  </div>

  <div className="mb-3">
    <label for="gender" className="form-label">Student Gender</label>
    <input type="text" className="form-control" id="gender"placeholder="Enter here"
     onChange={(e)=>{

      setGender(e.target.value);
    }}/>
    
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>

</form>


        </div>
    )
}
export default AddStudent;