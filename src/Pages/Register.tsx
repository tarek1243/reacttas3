
import React, { SyntheticEvent, useState } from "react" ; 
import { Navigate } from 'react-router-dom';
import baseUrl from "./globalVars";

const    Register = () =>{

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [redirect,setRedirect] = useState(false)

  const submit_function = async (e: SyntheticEvent) => {
    e.preventDefault();
   // const response =
     await fetch(baseUrl + 'register' , { 
      method : 'POST',
      headers : {'Content-type' : 'application/json'},
      body : JSON.stringify({name,email,password})
    })
    console.log("done");
    setRedirect(true);
  }


  if(redirect)
  return <Navigate to="/login"></Navigate>

return (
<div> 
<form onSubmit={submit_function}>
    <h1 className="h3 mb-3 fw-normal">Please Register</h1>
      <input type="name" className="form-control" required 
      onChange={e => setName(e.target.value)}
      placeholder="Name"/>
      <input type="email" className="form-control"  
        onChange={e => setEmail(e.target.value)}
      placeholder="name@example.com"/>
      <input type="password" className="form-control"  
        onChange={e => setPassword(e.target.value)}
      placeholder="Password"/>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
  </form>
</div>

);

};

 export default Register ; 