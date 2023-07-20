import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import emp from './emp.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare,faCircleInfo,faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {button} from "bootstrap";

const Employeelist = () => {
  const [employee, setemployee] = useState(null);
  const[empdata,getEmployeeInfo]= useState(null);
 const Navigate = useNavigate();
  const id=2;

  // useEffect( ()=> {
  //   fetch("https://localhost:44369/api/employee/viewEmployees")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resp) => {
  //       setemployee(resp);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     })
  //   });

  async function fetchData() {
    try{
      const response = await fetch('https://localhost:44369/api/employee/viewEmployees')
      const data = await response.json();
      setemployee(data);
    }
    catch(error){
      console.error(error);
    }
  }

  useEffect(() =>{
    fetchData();
  })

  const Removefunction=(id)=>{

    if(window.confirm('Are you sure you want to delete'))
    {
      fetch("https://localhost:44369/api/employee/deleteEmployee/"+ id,
    {
      method:"DELETE"
    })
      .then((res) => {
       alert("Deleted successfully")
       window.location.reload();
      })
      
      .catch((err) => {
        console.log(err.message);
      })

    }
    
      
  }
  const EditEmployee=(id) => {
    Navigate("/EditEmp/"+id);
  }

  const EmployeeDetails=(emp) => {
    console.log("Test Emp: ",emp);
    getEmployeeInfo(emp)
  }

  // const employee = [
  //   { employeeId: 1, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  //   { employeeId: 2, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  //   { employeeId: 3, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  //   { employeeId: 4, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  //   { employeeId: 5, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  // ];

  return (
    <div className="container">
      <div className="row">
        <h1>Employee List</h1>
      </div>
      <div className="row">
        <div className="col-12 mb-2 ">
          <Link to="/AddEmp" className="btn btn-sm btn-success float-end">
            New Employee
          </Link>
        </div>
      </div>
  
      <div className="row">
        {employee &&
        employee.map((i) => (
          <div className="col-sm-12 col-md-6 col-lg-3" key={i.firstname}>
            <div className="card">
              <div className="card-body">
                <img src={emp} /><br></br>
                <label>ID : {i.employeeId}</label> <br></br>
                <label>First Name : {i.firstName}</label>
                <br></br>
                <label>Last Name : {i.lastName}</label>
                <br></br>
                <label>Age : {i.age}</label> <br></br>
                <label> Salary : {i.salary}</label>
                <br></br>
                <label> Department : {i.department}</label>
                <br></br>
            
                <button className="btn btn-sm btn-outline-primary flaot-left" onClick={()=>EditEmployee(i.employeeId)}>
                  <FontAwesomeIcon icon={faPenToSquare} />Edit
                </button>&nbsp;
                <Link
                  to="/employeeDetails"
                  className="btn btn-sm btn-outline-info float-right"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                  onClick={()=>EmployeeDetails(i)}>
                 <FontAwesomeIcon icon={faCircleInfo} />Details 
                </Link>&nbsp;
                
                <a onClick={()=>{Removefunction(i.employeeId)}} className="btn btn-sm btn-outline-danger float-right ">
                <FontAwesomeIcon icon={faTrashCan} />Remove
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="card">
                    {
                      empdata &&
                      <div className="card-body">
                         <img src={emp}/><br></br>
                        <label>ID : {empdata.employeeId}</label> <br></br>
                        <label>First Name : {empdata.firstName}</label>
                        <br></br>
                        <label>Last Name : {empdata.lastName}</label>
                        <br></br>
                        <label>Age : {empdata.age}</label> <br></br>
                        <label> Salary : {empdata.salary}</label>
                        <br></br>
                        <label> Department : {empdata.department}</label><br></br>
                      </div>
                    }
                      </div>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary">Save</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Employeelist;