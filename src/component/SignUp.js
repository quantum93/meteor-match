import React from 'react'


export default function SignUp() {
  return (
    <div>
      <form>
        <input
          type='text'
          id='username'
          placeholder='Username'/>
        <input
          type='text'
          id='email'
          placeholder='Email'/>
        <input
          type='text'
          id='password'
          placeholder='Password'/>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}
