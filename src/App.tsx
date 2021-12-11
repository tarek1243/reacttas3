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
