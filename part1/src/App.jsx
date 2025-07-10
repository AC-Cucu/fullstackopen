const Hello = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}


const App = () => {
  console.log('Hello from component')
  const now = new Date()
  const a = 10
  const b = 20

  console.log(now, a+b)

  return (
    <div>      
      <h1>Greetings</h1>      
      <Hello/>
    </div>
  )
}

export default App
