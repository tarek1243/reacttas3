import { useEffect, useState } from "react";

const Home = (props: { name: string }) => {

  // const [name , setName] = useState('');
  // useEffect(
  //   () => {
  //     (async () => { })();
  //   });


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

  return (
    <div>
      <form>
        <h1 className="h3 mb-3 fw-normal">{props.name ? 'Hi' + props.name : 'Not authinticated'}</h1>
      </form>
    </div>
  );
};

export default Home;