import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function DeleteStudent(){
    const [student, setStudent] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const userId = params.id;

    useEffect(() => {
        async function Getid(){
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:8070/student/get/${userId}`)

                setStudent(res.data);
                console.log(res.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                alert(err.message);
            }
        }
        Getid();
    }, [userId])

    function handleDelete(e) {
        e.preventDefault();
        axios.delete(`http://localhost:8070/student/delete/${userId}`)
            .then(() => {
                alert("Student data deleted");
            })
            .catch((err) => {
                alert(err);
                });
                }

                return (

                    <div className="container">
                        <h1>Delete Student</h1>
                        {loading ? (
                            <div>Loading...</div>


                        ) : (student && Object.keys(student).length !== 0 ? (

                            <form onSubmit={handleDelete}>
                
                                <div className="mb-3">
                                    <label for="name" className="form-label">Student Name: {student.student.name}</label>
                                </div>
                
                                <div className="mb-3">
                                    <label for="age" className="form-label">Student Age: {student.student.age}</label>
                                </div>
                
                                <div className="mb-3">
                                    <label for="gender" className="form-label">Student Gender: {student.student.gender}</label>
                                </div>
                
                                <button type="submit" className="btn btn-danger">Delete</button>
                
                            </form>
                            ) : (
            <div>Loading...</div>
        ))}
            </div>
)
}
