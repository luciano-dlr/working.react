import './NavBar.css'

const NavBar = ({ boton1, boton2, boton3, boton4 }) => {

    return (
        <ul className="nav justify-content-center justify-item-spo">
            <li className="nav-item">
                <a className="nav-link btn btn-outline-dark">{boton1}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link btn btn-outline-dark">{boton2}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link btn btn-outline-dark">{boton3}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link btn btn-outline-dark">{boton4}</a>
            </li>
        </ul>
    )
}

export default NavBar

