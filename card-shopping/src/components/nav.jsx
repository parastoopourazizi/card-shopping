import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand">cooding</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">shop</Link>
          </li>
          <li className="nav-item">
            <Link to="/card">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
