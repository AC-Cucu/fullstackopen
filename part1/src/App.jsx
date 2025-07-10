const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
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
      <Hello name="George"/>
      <Hello name="Daisy"/>
    </div>
  )
}

export default App
