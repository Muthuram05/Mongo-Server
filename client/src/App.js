import React, { useState, useEffect } from "react";


function App() {
  const [message, setMessage] = useState("");
  function test(){
    fetch("http://localhost:8080/message").then((res) => res.json()).then((data) => setMessage(data.message));
  }

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={test}>Message</button>
    </div>
  );
}

export default App
