import { useState } from 'react'

import Display from './components/Display'

const App = () => {

  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)  
  const setToZero = () => setCounter(0)
  console.log('rendering...', counter)

  return (
    <>
      <Display counter={counter} />
      <button onClick={increaseByOne}>
        plus
      </button>    
      <button onClick={setToZero}>
        zero
      </button>      
    </>
  )
}

export default App