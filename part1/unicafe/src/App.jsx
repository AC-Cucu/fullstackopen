import { useState } from 'react'

import Header from './components/Header'
import Button from './components/Button'
import Statistic from './components/Statistic'

const App = () => {
  console.log('App component rendered')
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    console.log('Good button clicked, updating good count:', updatedGood)
    setGood(updatedGood)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    console.log('Neutral button clicked, updating neutral count:', updatedNeutral)
    setNeutral(updatedNeutral)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    console.log('Bad button clicked, updating bad count:', updatedBad)
    setBad(updatedBad)
  }

  return (
    <>
      <Header headingText="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Header headingText="statistics" />
      <Statistic text="good" counter={good} />
      <Statistic text="neutral" counter={neutral} />
      <Statistic text="bad" counter={bad} />
    </>
  )
}

export default App