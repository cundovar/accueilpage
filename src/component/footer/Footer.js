import React from "react";
import Button from "../common/greenButton";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__content flex-column ">
        <div className="">
          <div className="foot1 d-flex  col-12  align-items-center align-items-md-start justify-content-center">
            <div className="foot1__logo mb-3">
              <img className="log"src="/images/logo.svg" />
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
        <div className="foot2 flex-column col-12 flex-md-row justify-content-md-start align-items-center d-flex justify-content-center">
          <div className="me-md-5 col-12 bg-danger d-flex align-items-end   justify-content-end col-md-4 ">
            <ul className="  col-12     align-items-md-start justify-content-md-start d-flex flex-column  justify-content-end">
              <li className="text-center ">About us</li>
              <li className=" text-center ">Contact</li>
              <li className="text-center">Blog</li>
            </ul>
          </div>
          <div className=" col-12 col-md-4 justify-content-center">
            <ul className="align-items-center  d-flex flex-column align-items-md-start   justify-content-center justify-content-md-start ">
              <li className="text-center mx-auto">Carrière</li>
              <li className="text-center">Support</li>
              <li className="text-center">Politique de confidentialité</li>
            </ul>
          </div>
        </div>
        <div className="foot3 ">
          <div  className="foot3__button">

            <Button />
          </div>
          <div>
            <p className="text-center">@gergehrhrh tout droit</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
