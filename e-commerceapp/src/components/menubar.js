import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneRotary } from '@danieloi/pro-solid-svg-icons';

export default function Menubar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1A237E" }}>
            <a className="navbar-brand" href="#">
                <FontAwesomeIcon icon={faPhoneRotary} style={{ color: "#e4e70d" }} />
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to={"/"} className="nav-link"> Products <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <Link to={"/cart"} className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                        <span className='fa fa-shopping-cart me-1'></span>
                        My Cart
                    </Link>
                </form>
            </div>
        </nav>
    )
}