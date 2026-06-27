import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-warning" to="#">
            iRise
          </NavLink>
          <button
            className="navbar-toggler bg-info"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? "nav-link text-success fw-bold text-decoration-underline link-offset-3" : "nav-link text-light fw-bold"} aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=>isActive ? "nav-link text-success fw-bold text-decoration-underline link-offset-3" : "nav-link text-light fw-bold"}  to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? "nav-link text-success fw-bold text-decoration-underline link-offset-3" : "nav-link text-light fw-bold"}  to="/career">
                  Career
                </NavLink>
              </li>
               <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? "nav-link text-success fw-bold text-decoration-underline link-offset-3" : "nav-link text-light fw-bold"} to="/contact">
                  Contact
                </NavLink>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
