import { useState, useEffect } from "react";
import {useNavigate} from 'react-router'
import axios from 'axios'

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate=useNavigate()

  const gotoEmployee=(empObj)=>{
    navigate("/employee",{state:empObj})
  }
  const gotoEditEmployee=(empObj)=>{
    navigate("/edit-emp",{state:empObj})
  }
  const deleteEmpById=async(id)=>{
    let res=await axios.delete(`http://localhost:4000/emp-api/emp/${id}`)
    if(res.status===200){
      // refresh the list or something
      const fetchEmps = async () => {
        let res = await fetch("http://localhost:4000/emp-api/emp");
        if (res.status === 200) {
          let resObj = await res.json();
          setEmps(resObj.payload);
        }
      };
      fetchEmps();
    }
  }

  useEffect(() => {
    const fetchEmps = async () => {
      let res = await fetch("http://localhost:4000/emp-api/emp");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    };
    fetchEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center text-2xl rounded-3xl shadow-2xl shadow-taupe-600">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            {/* 3 buttons */}
            <div className="flex justify-around text-xl ">
              <button className="bg-green-500 rounded-2xl text-white p-1 " onClick={()=>gotoEmployee(empObj)}>View</button>
              <button className="bg-yellow-500 rounded-2xl text-white p-1" onClick={()=>gotoEditEmployee(empObj)}>Edit</button>
              <button className="bg-red-500 rounded-2xl text-white p-1" onClick={()=>deleteEmpById(empObj._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;