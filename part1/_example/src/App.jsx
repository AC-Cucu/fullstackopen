import { useState } from 'react'

import Display from './components/Display'
import Button from './components/Button'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  console.log('rendering...', counter)

  return (
    <>
      <Display counter={counter} />
      <Button 
        onClick={increaseByOne} 
        text='plus' 
      />
      <Button 
        onClick={decreaseByOne} 
        text='minus' 
      />      
      <Button 
        onClick={setToZero} 
        text='zero' 
      />
    </>
  )
}

export default App