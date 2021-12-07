
import React from "react";
import baseUrl from "../Pages/globalVars";

const Nav = (props: { name: string ,setName : (name: string) => void }) => {
  const logout = async () => {
    await fetch(baseUrl+ 'logout' , { 
       method : 'POST',
       headers : {'Content-type' : 'application/json'},
       credentials:'include',
     })
     console.log("done loged out");
     props.setName('');
   };

let menu;
  if (props.name === '') {
    menu =
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="Login">Login</a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="Register">Register</a>
    </li>
 
  </ul>
  }

  else 
  {
    menu =
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="Login" onClick={() => logout()}>Logout</a>
    </li>
    { <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="Login"  >name is {props.name}</a>
    </li> }
  </ul>
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="home">Top navbar</a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {menu}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;