//Dependencies
import { useState, useEffect } from 'react'
import { format } from 'date-fns';
import './App.css'

function App() {
  //create state
  const [currentTime, setCurrentTime] = useState(new Date());

  //Every second update currentTime with a new Date object
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    //Re-render and cleanup
    return () => clearInterval(timer);
  }, []); 
  
  //return clock
  return (
    <>
      <p className="clock">
        {//Clock
          format(currentTime, 'MMMM dd, yyyy h:mm:ss a')
        }
      </p>
    </>
  )
}

//Export
export default App
