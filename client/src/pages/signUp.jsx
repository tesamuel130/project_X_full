import React from 'react'

export default function SignUp() {
  return (
    <div>
      <form action="post">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter ur name...'/>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter ur email...'/>
        <label htmlFor="password">Name</label>
        <input type="password" placeholder='Enter ur password...'/>
      </form>
    </div>
  )
}
