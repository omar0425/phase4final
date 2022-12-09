import React, {useState} from "react";

const Login = ({setUser}) => {
  const[username,setUserName] = useState('')
  const [password, setPassword] =useState('')
  function handleSubmit() {}
  return (
    <form onSubmit={handleSubmit} className='auth-form'>
      <h2>Login</h2>
      <label>
        <span>username:</span>
        <input
          required
          type='text'
          onChange={(e) => setUserName(e.target.value)}
          value={username}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <button className='btn'>Login</button>
    </form>
  );
};

export default Login;
