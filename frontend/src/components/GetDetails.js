import React, { useState,useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';



export default function GetDetails(){
    const [student, setStudent] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const userId = params.id;

    useEffect(() => {

        //when the server or there is a error.. browser show there is an loading..

        /*Before the API request is made, it updates the loading state variable to true using setLoading(true),
         this will show the loading spinner on the screen. After the data is fetched it updates the student state variable
         using setStudent(res.data) and loading state variable to 
         false using setLoading(false) which will hide the loading spinner.
         */

        async function Getid(){
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:8070/student/get/${userId}`)

                setStudent(res.data);
                setLoading(false);
                console.log(res.data);
            } catch (err) {
                setLoading(false);
                alert(err.message);
            }
        }
        Getid();
    }, [userId])
//The second argument of useEffect is [userId], this tells React to re-run this effect only when the userId value changes




    const studentData = student.student || {};
const { name, age, gender } = studentData;
/*const { name, age, gender } = student.student && student.student; 
same thing happeing here */

/*This way, if student.student is undefined or null, the destructuring will fail gracefully and use
 default empty object instead, so you can avoid TypeError 
 when you try to access a property of an undefined or null object.*/

   
    
return (
    <div style={{marginTop :'20px'}}>
     
        {loading ? (
            <div>Loading...</div>
        ) : (student && studentData && Object.keys(studentData).length !== 0 ? (
            <div>
                <h4>{name}</h4>
                <hr/>
                <dl className="row">
                    <dt className="col-sm-3">Age</dt>
                    <dt className="col-sm-9">{age}</dt>
                    <dt className="col-sm-3">Gender</dt>
                    <dt className="col-sm-9">{gender}</dt>
                </dl>
            </div>
        ) : (
            <div>Loading...</div>
        ))}
    </div>
)

            }
/*   <h4>{name}</h4>
            <hr/>

            <dl className="row">
                <dt className="col-sm-3">Age</dt>
                <dt className="col-sm-9">{age}</dt>

                <dt className="col-sm-3">Gender</dt>
                <dt className="col-sm-9">{gender}</dt>
            </dl>*/

/*   {student.map((student) =>(
                       
                             <div>   
                                {student.name}
                                
                                
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                           
                    </div>
                    ))}

        </div>*/


/*


export default class GetDetails extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            student:{}
        };
    }
    componentDidMount(){

        const id = useParams();

        axios.get(`http://localhost:8070/student/get/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    student:res.data.student
                });
                console.log("this.state.student");
            }
        });
    }

    render(){
        return(
            <div>
                GetDetails
                <div>id = {JSON.stringify(params)}</div>;
            </div>
        )
    }
}

*/
