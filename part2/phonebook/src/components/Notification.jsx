const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  const generalStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,  
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  const notificationStyle = message.type === 'success' ? generalStyle : {...generalStyle, color: 'red'}

  return (
    <div style={notificationStyle}>
      {message.text}
    </div>
  )
}

export default Notification