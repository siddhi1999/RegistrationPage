import {useState} from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerForm = async (event) => {

    event.preventDefault();
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    });
    
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerForm}>
        <input 
          text= "text" 
          placeholder= "Name"
          value={name}
          onChange={e => setName(e.target.value)}
          /><br/>
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
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;
