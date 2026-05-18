import {useForm} from 'react-hook-form'
import {useNavigate, useLocation} from 'react-router'
import { useEffect } from 'react';
import axios from 'axios'

function EditEmployee() {
  const {register,handleSubmit}=useForm()
  const navigate=useNavigate()

  //get empObj from use navigate hook
  const {state}=useLocation();
  useEffect(()=>{
    
  },[])
  
  const saveModifiedEmp=async(modifiedEmp)=>{
    //make http PUT req
    const res=await axios.put(`http://localhost:4000/emp-api/emp/${state._id}`, modifiedEmp)
    if(res.status===200){
      navigate("/list")
    }
  }



  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600">Edit Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModifiedEmp)} >
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("company")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-green-600 text-white block mx-auto p-4">
          Save
        </button>
      </form>
    </div>
  )
}

export default EditEmployee