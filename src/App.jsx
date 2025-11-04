//Dependencies
import { useState, useEffect } from 'react'
import { format } from 'date-fns';
import './App.css'

function App() {
  //create state
  const [currentTime, setCurrentTime] = useState(new Date());

  //Every second update currentTime with a new Date object
  useEffect(() => {
    //render new time ever 1 second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    //cleanup
    return () => clearInterval(timer);
  }, []); 
  
  //clock html
  return (
    <>
      <p className="clock">
        {//Clock format month day, year, hour, minutes, seconds, am / pm
          format(currentTime, 'MMMM dd, yyyy h:mm:ss a')
        }
      </p>
    </>
  )
}

//Export function
export default App
