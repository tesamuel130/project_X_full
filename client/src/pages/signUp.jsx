import { useState } from "react"

export default function SignUp() {

  const[data, setData] = useState({
    name:'',
    email:'',
    password:'',
  })

  const registerUser = (e) =>{
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter ur name...' value={data.name} 
        onChange={(e) => setData({...data, name: e.target.value})}/>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter ur email...' value={data.email} 
        onChange={(e) => setData({...data, email: e.target.value})}/>
        <label htmlFor="password">Name</label>
        <input type="password" placeholder='Enter ur password...' value={data.password} 
        onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
