import {useLocation} from 'react-router'

function Employee() {
  //read state received in navigation
  const {state}=useLocation()
  console.log(state)

  return (
    <div className='text-center bg-amber-200 rounded-3xl'>
      <h2 className='text-3xl'>Details of Employee</h2>
      <p><b>Name: </b>{state.name}</p>
      <p>{state.email}</p>
      <p>{state.mobile}</p>
      <p>{state.designation}</p>
      <p>{state.company}</p>
    </div>
  )
}

export default Employee