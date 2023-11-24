import React from "react";
import Button from "../common/greenButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <div className="foot1">
            <div className="foot1__logo">
              <img src="/images/logo.svg" />
            </div>

              <div className="d-flex foot1__icon__social ">
                <img src="./images/icon-facebook.svg" alt="icon" />
                <img src="/images/icon-pinterest.svg" alt="icon" />
                <img src="/images/icon-twitter.svg" alt="icon" />
                <img src="/images/icon-youtube.svg" alt="icon" />
                <img src="/images/icon-instagram.svg" alt="icon" />
              </div>
          </div>
        </div>
        <div className="foot2 d-flex">
          <div className="me-5">
            <ul>
              <li>About us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Carrière</li>
              <li>Support</li>
              <li>Politique de confidentialité</li>
            </ul>
          </div>
        </div>
        <div className="foot3">
          <div  className="foot3__button">

            <Button />
          </div>
          <div>
            <p>@gergehrhrh tout droit</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
