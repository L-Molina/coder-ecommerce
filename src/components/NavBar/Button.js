import "./NavBar.css"

const Button = (props) => {
    return (
        <button className="nav-links" onClick={props.callback}>{props.label}</button>
    )
}

export default Button