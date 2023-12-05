import './App.css';
import { useState } from 'react';

function App() {
  const[count,setCount]=useState(0)
  function dataIncrement(data){
   setCount(data)
  }
  function dataDecrement(data2){
    setCount(data2)
  }
  function dataReset(data3){
    setCount(data3)
  }

  return (
    <div className="App">
      <h1 class='text-center text-danger'>COUNTER APP</h1>
      <div class='text-center bg-lg container p-5 my-5 container w-75 shadow-lg'>

        <h1 class='text-black'> {count} </h1>

        <div class='text-center'>
          <button class='btn btn-success mt-5'onClick={()=>dataIncrement(count+1)} type='button'>INCREMENT</button>
          <button  class='btn btn-success ms-5 mt-5'onClick={()=>dataDecrement(count-1)}>DECREMENT</button>
          <button  class='btn btn-success ms-5 mt-5'onClick={()=>dataReset(0)}>RESET</button>
        </div>

      </div>
      
    </div>
  );
}

export default App;