import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css"
import Home from "./components/Home";
import CreateDB from "./components/CreateDB";
import DropDB from './components/DropDB';
import InsertOne from "./components/InsertOne";
import InsertMany from "./components/InsertMany";
import DeleteOne from "./components/DeleteOne";
import DeleteMany from "./components/DeleteMany";
import UpdateData from "./components/UpdateData";
import NoPage from "./components/NoPage";


function App() {

	return (
	<>
	<BrowserRouter>
    <div className="content">
      	<div className="content-left">
			<br></br>
			<br />
			<br />
			<br />
			<img src="./image/mongo.png" ></img>
			<div>
				<NavLink to="/" style={{textDecoration:"none"}}>
					Home
				</NavLink>
			</div>
			<div>
				<NavLink to="/CreateDB" style={{textDecoration:"none"}}>
					CreateDB
				</NavLink>
			</div>
			<div>
				<NavLink to="/DropDB" style={{textDecoration:"none"}}>
					DropDB
				</NavLink>
			</div>
			<div>
				<NavLink to="/InsertOne" style={{textDecoration:"none"}}>
					InsertOne
				</NavLink>
			</div>
			<div>
				<NavLink to="/InsertMany" style={{textDecoration:"none"}} >
					InsertMany
				</NavLink>
			</div>
			<div>
				<NavLink to="/DeleteOne" style={{textDecoration:"none"}}>
					DeleteOne
				</NavLink>
			</div>
			<div>
				<NavLink to="/DeleteMany" style={{textDecoration:"none"}}>
					DeleteMany
				</NavLink>
			</div>
			<div>
				<NavLink to="/UpdateData" style={{textDecoration:"none"}}>
					UpdateData
				</NavLink>
			</div>
		</div>
        <div className="content-right">
          <Routes >
            <Route exact path="/" element={<Home />} />
            <Route exact path="/CreateDB" element={<CreateDB />} />
            <Route exact path="/DropDB" element={<DropDB />} />
            <Route exact path="/InsertOne" element={<InsertOne />} />
            <Route exact path="/InsertMany" element={<InsertMany />} />
            <Route exact path="/DeleteOne" element={<DeleteOne />} />
            <Route exact path="/DeleteMany" element={<DeleteMany />} />
            <Route exact path="/UpdateData" element={<UpdateData />} />
            <Route exact path="*" element={<NoPage />} />
          </Routes>
        </div>
    </div>
	</BrowserRouter>
	</>
	);
}

export default App;
