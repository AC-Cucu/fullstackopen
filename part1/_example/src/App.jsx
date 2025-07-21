import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }
    console.log('left button clicked', newClicks)
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    console.log('right button clicked', newClicks)
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
    </div>
  )
}
export default App