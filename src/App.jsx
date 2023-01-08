import React, {useState} from 'react';

const App = () => {

const state= useState();

const[count , setCount] =useState(1);

// console.log(state);
const IncNum=()=>{
    setCount(count+1);
    //console.log(count);
    //console.log("clicked " + count++)
};

return(
<>

<h1>Hii</h1>
<h1>{count}</h1>
<button onClick={IncNum}>Click Me</button>

</>
);

};
export default App;