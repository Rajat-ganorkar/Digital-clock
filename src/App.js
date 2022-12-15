import React, { useState } from 'react';

const App = () =>{
 
  const purple = "pink";
  const [bg, setBg] = useState(purple);
  const [name1, setName] = useState("click Me")
const Black = "black";
    const bgChange = ()=> {
      
      let newbg = "white";
      setBg(newbg);
      setName('oyy 🐺');
    };
  const bgBack = () =>{

    setBg(Black);
    setName("Ayyo : ")
  };
  return(
    <>
    <div style={{backgroundColor:bg}}>
    <button onClick={bgChange} onDoubleClick={bgBack}>{name1}</button>
    </div>
    </>
  );
};
export default App;