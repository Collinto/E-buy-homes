import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  const [toggleIcons, setToggleIcons] = useState(true);
  const handleIcons = () => {
    setToggleIcons(!toggleIcons);
  };

    return (
      // <div className="container-fluid">
        <div className="media">
          <div className="email-location">
            <div className="email">
              <p>
                <i
                  className="bi bi-envelope-at-fill"
                  style={{ color: "#F2AA9E" }}
                ></i>
                email@gmail.com
              </p>
            </div>
            <div className="location">
              <p>
                <i
                  className="bi bi-geo-alt-fill"
                  style={{ color: "#F2AA9E" }}
                ></i>
                Africa,Nairobi,Kenya
              </p>
            </div>
          </div>
          <div className="soctialMedia">
            <div id="icons" className={toggleIcons ? "#icons active" : "#icons"}>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-whatsapp"></i>
              <i className="bi bi-instagram"></i>
            </div>
            <div className="btn">
              <button>Add listing</button>
            </div>
          </div>
          <div onClick={handleIcons} className="toggleIcon">
            {toggleIcons ? (
              <i className="bi bi-list" />
            ) : (
              <i className="bi bi-x" />
            )}
          </div>
        </div>
  )
}

export default Footer