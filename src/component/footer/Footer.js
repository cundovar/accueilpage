import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <div className="">
            <div className="logo">
              <img src="/images/logo.svg" />

              <div className="d-flex foot1 ">
                <img src="./images/icon-facebook.svg" alt="icon" />
                <img src="/images/icon-pinterest.svg" alt="icon" />
                <img src="/images/icon-twitter.svg" alt="icon" />
                <img src="/images/icon-youtube.svg" alt="icon" />
                <img src="/images/icon-instagram.svg" alt="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="foot2 d-flex">
          <div>
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
          <div>
            <button>truc a dire</button>
            <p>@gergehrhrh tout droit</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
