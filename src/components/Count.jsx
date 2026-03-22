import React  , {useEffect ,  useState} from 'react'

const Count = () => {
    const [count ,  setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
        setCount((count) => count + 1);
        }, 1000);
    });
  return (
    
   <center>


   <div  className='text-red-300 text-4xl font-semibold'>
        {count}
     
    </div> 
    </center> 
  )
}

export default Count;
