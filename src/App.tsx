import { useEffect, useState } from 'react';

import './App.css';
import './signin.css';
import Login from './Pages/Login';
import TransactionsList from './Pages/TransactionsList.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Nav from './Components/Nav';
import baseUrl from './Pages/globalVars';
import Logout from './Pages/Logout';

function App() {

  const [name, setName] = useState('')

  useEffect(() => {
    console.log("Started useEffect");

    async function fetchCurrentUserNameByToken() {
      console.log("Started fetchCurrentUserNameByToken");

      const response = await fetch(baseUrl + 'user', {
        headers: { 'Content-type': 'application/json' },
        credentials: 'include',
      });
      const content = await response.json();
      setName(content.name);
      console.log(content);
    }
    fetchCurrentUserNameByToken()
  }, [])


  return (
    <div className="App">
      <main className="">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
   
  </div>
</nav>


        <BrowserRouter>
          <Nav name={name} setName={setName} />
          {console.log("name:>>>>")}
          {console.log(name)}
          <Routes>
            <Route path="/home" element={<Home name={name} />}> </Route>
            <Route path="/login" element={<Login setName={setName} />}> </Route>
            <Route path="/logout" element={<Logout setName={setName} />}> </Route>
            <Route path="/register" element={<Register />}> </Route>
            <Route path="/TransactionsList" element={<TransactionsList />}> </Route>
          </Routes>
        </BrowserRouter>

        <p className="mt-5 mb-3 text-muted">©2022   1.2</p>
      </main>
    </div>
  );
}

export default App;
