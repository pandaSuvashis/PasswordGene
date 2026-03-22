import "./App.css";
import CursorFollower from "./components/CursorFollower";
import React, { useState , useCallback , useEffect  ,useRef} from "react";
import Count from "./components/Count";
function App() {


  const [len, setlen] = useState(8);
  const [numallowed  , setnumAllowed]  =  useState(false);
  const [charAllowed , setCharAllowed] =  useState(false);
  const [Password  , setpass]  = useState("panda")




//ref 
const Passwordref =  useRef(null);


   //callback stores the previous data and gets the data from prev data 
   const Passwordgene = useCallback( () => {

    let pass =  "" 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if ( numallowed)  str += "1234567890"
    if(charAllowed) str+= "~!@#$%^&*()_{}:;><?"
    for( let i = 1 ; i < len ; i++){
      let char =   Math.floor(Math.random() * str.length +1)
      pass +=  str.charAt(char)
    }
    setpass(pass)
     
   } , [len,numallowed, charAllowed  ,setpass])



   //refe
   const copyToClipBoard =  useCallback(() => {
  
    window.navigator.clipboard.writeText(Password);
    alert("the value copied");
   } ,[Password])
   //re run the function if any change
   useEffect(() => {
    Passwordgene()
   } , [len,numallowed, charAllowed  ,setpass])

  return (
    
  //  className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py3 my-8 bg-gray-800"
      <div>
        <div className="bg-gray-400 text-center p-8 rounded-2xl mx-auto mt-20 w-fit">

          <h1 className="text-base md:text-2xl">Password generator</h1>
<br />
         <input 
         type="text" 
        className="w-full h-15 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={Password}
          placeholder="Enter your message here..." 
          readOnly
          ref={Passwordref}
          />
          <br /> <br />

          <button  onClick={copyToClipBoard}    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">copy</button>

          
          <input
            id="rangeSlider"
            type="range"
            min={8}
            max={80}
            value={len}
            onChange={(e) => setlen(Number(e.target.value))}
            className="w-full"
          />
          <label >
            Length: {len}
          </label>
          <br />

          <input type="checkbox" 
                    defaultChecked={numallowed}
          id="charInput"
          onChange={ () => {
            setCharAllowed( (prev) => !prev);
            
          }}/>
          <label htmlFor="charInput">  Chararacters </label>
          
          <input type="checkbox"  
          defaultChecked={numallowed}
          id="numInput"
          onChange={ () => {
            setnumAllowed( (prev) => !prev);
          }}
          />
          <label htmlFor="numInput"> Integers </label>

        </div>
<br />
      <Count/>
      </div>
    
  );
}

export default App;
