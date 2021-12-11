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

function App() {

  const [name, setName] = useState('')
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(baseUrl + 'user', {
        headers: { 'Content-type': 'application/json' },
        credentials: 'include',
      });
      const content = await response.json();
      setName(content.name);
      console.log(content);
    }
    fetchMyAPI()
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
            <Route path="/register" element={<Register />}> </Route>
            <Route path="/TransactionsList" element={<TransactionsList />}> </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
