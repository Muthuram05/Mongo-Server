import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  function findOne(){
    fetch("http://localhost:8080/message").then((res) => res.json()).then((data) => setMessage(data.message));
  }
  function findMany(){
    fetch("http://localhost:8080/message").then((res) => res.json()).then((data) => setMessage(data.message));
  }
  function deleteOne(){
    fetch("http://localhost:8080/message").then((res) => res.json()).then((data) => setMessage(data.message));
  }
  function deleteMany(){
    fetch("http://localhost:8080/message").then((res) => res.json()).then((data) => setMessage(data.message));
  }
  function insertOne(){
    fetch("http://localhost:8080/message").then((res) => res.json()).then((data) => setMessage(data.message));
  }
  function insertMany(){
    fetch("http://localhost:8080/message").then((res) => res.json()).then((data) => setMessage(data.message));
  }

  return (
    <div className="App">
      <h1 align="center">MongoDB - Query Document</h1>
      <br ></br>
      <div className="content">
        <div className="content-left">
          <button onClick={findOne}>CreateDB</button>
          <button onClick={findOne}>DropDB</button>
          <button onClick={findOne}>CreateCollection</button>
          <button onClick={findOne}>DropCollection</button>
          <button onClick={findOne}>FindOne</button>
          <button onClick={findMany}>FindMany</button>
          <button onClick={deleteOne}>DeleteOne</button>
          <button onClick={deleteMany}>DeleteMany</button>
          <button onClick={insertOne}>InsertOne</button>
          <button onClick={insertMany}>InsertMany</button>
        </div>
        <div className="content-right">
          <h1>{message}</h1>
          <h1>message</h1>
        </div>  
      </div>    
    </div>
  );
}

export default App
