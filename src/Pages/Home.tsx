
import React, { useEffect, useState } from "react";

import baseUrl from "./globalVars";
 

const Home = (props : {name : string}) => {
  //const [name, setName] = useState('')

 
//   function sayHello() {
//     async function fetchMyAPI() {
//       const response = await fetch(baseUrl+'user', {
//         headers: { 'Content-type': 'application/json' },
//       });
//       const content = await response.json();
//       setName(content.name);
// console.log(content)
//     }
//     fetchMyAPI()
//   }


////working
  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     const response = await fetch(baseUrl+'userAny', {
  //       headers: { 'Content-type': 'application/json' },
  //       credentials : 'include',
  //     });
  //     const content = await response.json();
  //     setName(content.name);
  //     console.log(content);
  //   }
  //   fetchMyAPI()
  // }, [])
 

  const [count, setCount] = useState(0);
  return (
    <div>
      <form>
        <h1 className="h3 mb-3 fw-normal">{props.name ? 'Hi' + props.name : 'Not authinticated'}</h1>
      </form>
      {/* <button onClick={() =>   setCount(count + 1)}>
        Click me
      </button>
       <button onClick={() =>sayHello( )}>sayHello</button>  */}
    </div>
  );
};

export default Home;