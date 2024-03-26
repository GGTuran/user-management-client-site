
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/users')
    .then(res=> res.json())
    .then(data => setUsers(data));
  } ,[])
  

  return (
    <>
     
      <h1>User Management</h1>
      <h1>Numbers:{users.length}</h1>

    </>
  )
}

export default App