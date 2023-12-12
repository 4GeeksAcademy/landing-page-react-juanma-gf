import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" > 
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav flex-grow-0 ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-white"  aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary disabled">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary disabled">Contact</a>
                    </li>
                </ul>
               
            </div>
        </div>
      </nav >
    );
}
export default Navbar