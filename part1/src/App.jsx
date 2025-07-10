const Hello = (props) => {
  console.log(props)
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </>
  )
}


const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <>      
      <h1>Greetings</h1>      
      <p>{friends[0]}</p>
      <p>{friends[1]}</p>
    </>
  )
}

export default App
