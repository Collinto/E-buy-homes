// import Container froimportm "react-bootstrap/Container";
import { useState } from "react";
import "./header.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  const [toggle, setToggle] = useState(true);
 

  const handleClick = () => {
    console.log(setToggle(!toggle));
    setToggle(!toggle);
  };

  return (
      <header className="hearderMain">
        <div className="headerLogo">
          <span style={{ color: "red", margin: "10px" }}>
            <i className="bi bi-house-fill" style={{ color: "#F2AA9E" }}></i>
          </span>
          Querter
        </div>
        <nav
          id="headerNaveBar"
          className={toggle ? "#headerNaveBar  active" : "#headerNaveBar"}
        >
          <ul>
            <li>Home+</li>
            <li>About+</li>
            <li>News+</li>
            <li>pages+</li>
            <li>contact+</li>
          </ul>
        </nav>
        <div className="headerSearch">
          <span>
            <i className="bi bi-search"></i>
          </span>
          <span>
            <i className="bi bi-person"></i>
          </span>
          <span>
            <i className="bi bi-cart2"></i>
            <sup>2</sup>
          </span>
        </div>
        <div onClick={handleClick} className="toggle">
          {toggle ? <i className="bi bi-list" /> : <i className="bi bi-x" />}
        </div>
      </header>
  );
}

export default Header;
