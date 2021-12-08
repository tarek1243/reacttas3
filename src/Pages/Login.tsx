
import React, { SyntheticEvent, useState } from "react" ; 
import { Navigate } from "react-router";
import baseUrl from "./globalVars";


const    Login = (props : {setName:(name:string)=> void }) =>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  const [redirect,setRedirect] = useState(false)

    const submit_function = async (e: SyntheticEvent) => {
        e.preventDefault();
     const response =   await fetch(baseUrl+ 'login' , { 
          method : 'POST',
          headers : {'Content-type' : 'application/json'},
          credentials:'include',
          body : JSON.stringify({email,password})
        })

        const content =await response.json();
        props.setName(content.name);
        console.log("done");
         setRedirect(true);
      }

      if(redirect)
      return <Navigate to="/home"></Navigate>

return (
<div> 
<form  onSubmit={submit_function}>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    <div className="form-floating">
      <input type="email" className="form-control"   placeholder="name@example.com"
      onChange={e => setEmail(e.target.value)}
      />
    </div>
    <div className="form-floating">
      <input type="password" className="form-control"   placeholder="Password"
      onChange={e => setPassword(e.target.value)}
      />
    </div>
    <div className="checkbox mb-3">
        <input type="checkbox" value="remember-me"/> 
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-muted">©2022   1.1</p>
  </form>
</div>
);

};

 export default Login ; 