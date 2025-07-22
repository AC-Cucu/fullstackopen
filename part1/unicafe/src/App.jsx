import { useState } from 'react'

import Header from './components/Header'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  console.log('App component rendered')
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const statistics = [
    {
      text: 'good',
      counter: good
    },
    {
      text: 'neutral',
      counter: neutral
    },
    {
      text: 'bad',
      counter: bad
    },
    {
      text: 'all',
      counter: all
    },
    {
      text: 'average',
      counter: average
    },
    {
      text: 'positive',
      counter: positive
    }
  ]
  console.log('Statistics data:', statistics)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    console.log('Good button clicked, updating good count:', updatedGood)
    setGood(updatedGood)

    const updatedAll = neutral + bad + updatedGood
    setAll(updatedAll)

    const updatedAverage = (updatedGood - bad) / updatedAll
    setAverage(updatedAverage)

    const updatedPositive = (updatedGood / updatedAll) * 100
    setPositive(updatedPositive)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    console.log('Neutral button clicked, updating neutral count:', updatedNeutral)
    setNeutral(updatedNeutral)

    const updatedAll = updatedNeutral + bad + good
    setAll(updatedAll)

    const updatedAverage = (good - bad) / updatedAll
    setAverage(updatedAverage)

    const updatedPositive = (good / updatedAll) * 100
    setPositive(updatedPositive)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    console.log('Bad button clicked, updating bad count:', updatedBad)
    setBad(updatedBad)

    const updatedAll = neutral + updatedBad + good
    setAll(updatedAll)

    const updatedAverage = (good - updatedBad) / updatedAll
    setAverage(updatedAverage)

    const updatedPositive = (good / updatedAll) * 100
    setPositive(updatedPositive)
  }

  return (
    <>
      <Header headingText="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Header headingText="statistics" />
      <Statistics statistics={statistics} />
    </>
  )
}

export default App