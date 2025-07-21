const Header = ({headingText}) => {
    console.log('Header component rendered', headingText)
    return (        
        <h1>{headingText}</h1>
    )
}


export default Header