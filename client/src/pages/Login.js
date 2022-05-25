import {useState} from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (event) => {

    event.preventDefault();
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    });
    
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input 
          text= "email" 
          placeholder= "Email" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          /><br/>
        <input 
          text= "password" 
          placeholder= "Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          /><br/>
        <input type="submit" placeholder='OK' />
      </form>

      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
