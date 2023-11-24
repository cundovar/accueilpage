import React from "react";
import Button from "../common/greenButton";

const Header = () => {
  return (
    <>
      <header className="row pt-1  position-fixed z-3 bg-white header">
        <nav className="navbar navbar-expand-lg nav__contain  ">

          <div className=" nav__contain__contain ">
            <a className=" header1" href="#">
              <img src="/images/logo.svg" />
            </a>

            <div className="header2 d-flex  liste">
              <ul className="navbar-nav  mb-2 liste mb-lg-0 ">
                <li class="nav-item  ">
                  <a class="nav-link" aria-current="page" href="#">
                    Accueil
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    about
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contenu
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Carrière
                  </a>
                </li>
              </ul>
            </div>

            <div className="header3">
             <Button className="header3_button" />
            </div>

          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
