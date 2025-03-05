import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navbar  navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand"> cooding</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">shop</Link>
          </li>
          <li className="nav-item">
            <Link to="/card">card</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
