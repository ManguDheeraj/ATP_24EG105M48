import './App.css'
import User from './components/User.jsx';
import Counter from './components/Counter.jsx';
function App(){
  //state
  const users = [
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: "Vivaan Patel",
    email: "vivaan.patel@example.com",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Aditya Singh",
    email: "aditya.singh@example.com",
    image: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    name: "Sai Kumar",
    email: "sai.kumar@example.com",
    image: "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    name: "Rohan Reddy",
    email: "rohan.reddy@example.com",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    name: "Ananya Gupta",
    email: "ananya.gupta@example.com",
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    name: "Isha Verma",
    email: "isha.verma@example.com",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Priya Nair",
    email: "priya.nair@example.com",
    image: "https://randomuser.me/api/portraits/women/13.jpg"
  },
  {
    name: "Sneha Das",
    email: "sneha.das@example.com",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    name: "Kavya Iyer",
    email: "kavya.iyer@example.com",
    image: "https://randomuser.me/api/portraits/women/15.jpg"
  }
];

  //return 
  return(
    <div>
      <div className='grid grid-cols-2 bg-blue-950 p-6  justify-end'>
        <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfi_hnj815qPSuy6anCsa91Qzc86KJd0QYxNVQb3b8_nL-SVrI14596AUFQD8balQBjEAETkecYZbZGsGLthxXXOazeJN&s&ec=121585077" alt="" />
        <ul className='flex flex-wrap justify-end  gap-5 text-gray-400 text-center '>
          <li>Home</li>
          <li>Signup</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <Counter/>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-t from-red-600 to-blue-600 p-5">
        {
          users.map((user)=>(<User userObj={user} key={user.email}/>))
        }
      </div>
      <div className='grid grid-cols-2 bg-blue-950 mx-auto'>
        <div className='text-gray-400 mx-auto'>
          <p>Anurag University</p>
          <p>Hyderabad</p>
          <p>Telangana</p>
        </div>
        <div className='text-gray-400 mx-auto'>
          <p>24eg105m24@gmail.com</p>
          <p>www.anurag.edu.in</p>
        </div>
      </div>
    </div>
  )
}

export default App;