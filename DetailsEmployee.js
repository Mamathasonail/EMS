import { useEffect, useState } from "react";
import { Link,useParams,useNavigate  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Detailsemployee = () => {
  
  const {id}=useParams();
  const [employeeId,setID]=useState("");
  const [firstname, firstName] = useState("");
  const [lastname, lastName] = useState("");
  const [age, Age] = useState("");
  const [salary, Salary] = useState("");
  const [department, Department] = useState("");
  useEffect( ()=> {
    fetch("https://localhost:44369/api/employee/GetEmployeeByID/"+id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setID(resp.employeeId);
       firstName(resp.firstname);
       lastName(resp.lastname);
       Age(resp.age);
       Salary(resp.salary);
       Department(resp.department)  
      })
      .catch((err) => {
        console.log(err.message);
      })
    },[]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
        <div className="card">
              <div className="card-body">
                <label>ID : {id.employeeId}</label> <br></br>
                <label>First Name : {id.firstname}</label>
                <br></br>
                <label>Last Name : {id.lastname}</label>
                <br></br>
                <label>Age : {id.age}</label> <br></br>
                <label> Salary : {id.salary}</label>
                <br></br>
                <label> Department : {id.department}</label><br></br>
                <label> Address : {id.department}</label><br></br>
                <Link to="/" className="btn btn-sm btn-primary float-end">
                        {" "}
                        <FontAwesomeIcon icon={faArrowLeft} /> Back{" "}
                      </Link>
                </div></div>
        </div>
      </div>
    </div>
  );
};

export default Detailsemployee;