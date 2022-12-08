import React, {useState} from 'react'
import './Signup.css'

const Signup = () => {
  const[username,setUserName] = useState('')
  const [password, setPassword] =useState('')
  const [passWordConfirmation, SetPasswordConfirmation] = useState('')
  function handleSubmit(){}
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Sign up</h2>
      <label>
        <span>username:</span>
        <input
          required 
          type="text" 
          onChange={(e) => setUserName(e.target.value)} 
          value={username}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
      </label>
      <label>
        <span>confirm password:</span>
        <input
          required
          type="password" 
          onChange={(e) => SetPasswordConfirmation(e.target.value)} 
          value={passWordConfirmation}
        />
    </label>
      <button className="btn">Sign up</button>
    </form>
  )
}

export default Signup