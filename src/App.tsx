import React, { useEffect, useState } from 'react';
 
import './App.css';
import './signin.css';
import Login from './Pages/Login';
import { BrowserRouter , Route ,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Nav from './Components/Nav';
import baseUrl from './Pages/globalVars';
 



function App() {


  const [name, setName] = useState('')
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(baseUrl+'user', {
        headers: { 'Content-type': 'application/json' },
        credentials : 'include',
      });
      const content = await response.json();
      setName(content.name);
      console.log(content);
    }
    fetchMyAPI()
  }, [])


//   function sayHello() {
//     async function fetchMyAPI() {
//       const response = await fetch(baseUrl+'user', {
//         headers: { 'Content-type': 'application/json' },
//         credentials : 'include',
//       });
//       const content = await response.json();
//       setName(content.name);
// console.log(content)
//   //  alert('Hello!'+content);
//     }
//     fetchMyAPI()
//   }


  return (
    <div className="App">
 <main className="form-signin">
 
  <BrowserRouter>
 <Nav name={name} setName={setName}/>


{console.log("name:>>>>")}
{console.log(name)}
 

 <Routes>
        <Route path="/home" element={<Home name={name}/>}> </Route>
        <Route path="/login" element={<Login  setName={setName} />}> </Route>
        <Route path="/register" element={<Register />}> </Route>
  </Routes>
  </BrowserRouter>

  {/* <button onClick={() =>sayHello( )}>sayHello</button> */}
</main>


    </div>
  );
}

export default App;
