import { useState } from 'react'

const App = () => {
  // Storing the whole state in a single object does not bring any benefit for this example, but therare are cases where it can be useful.
  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0
  // })

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])  
  const [total, setTotal] = useState(0)
 

  const handleLeftClick = () => {
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setAll(allClicks.concat('L'))
    setTotal(updatedLeft + right)
    // The `concat` method creates a new array with the new element added, which is the recommended way to update state in React.    
    // We could also use `setAll(allClicks.push('L'))` but this is a bad practice
    // because it mutates the state directly, which is not recommended in React.
    // https://stackoverflow.com/a/40309023
  }

  const handleRightClick = () => {
    const updatedRight = right + 1
    setRight(updatedRight)
    setAll(allClicks.concat('R'))
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </div>
  )
}
export default App