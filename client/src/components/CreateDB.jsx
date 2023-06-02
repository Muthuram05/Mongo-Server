import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';



const CreateDB = () => {
  const [dbName,setDbName] = useState('');
  const [result,setResult] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8080/create', {userName:dbName})
    .then((response) => {
      setResult(response.data.message);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Enter New Db Name' onChange={e => setDbName(e.target.value)}/>
        <input type='submit' value='Create'  placeholder='Enter New Db Name'/>
      </form>
      { result ?
        <div>
          Your created database (mydb) is not present in list. To display database, you need to insert at least one document into it.
          <p></p>
        </div> : null
      }
      
      <p>{result}</p>
    </div>
  )
}

export default CreateDB