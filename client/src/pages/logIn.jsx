import React from 'react'

export default function LogIn() {

  const loginUser = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={loginUser}>
      <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter ur email...'/>
        <label htmlFor="password">Name</label>
        <input type="password" placeholder='Enter ur password...'/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
