import React from "react";
import Main2 from "./Main2.js";
import Main3 from "./Main3.js";
import Button from "../common/greenButton.js";

const Main = () => {
  return (
    <main className=" main  position-relative  ">
      <section className="d-flex   position-relative bg-section-1 ">
        <div className="section__content  col-12 col-md-6 flex-column-reverse flex-lg-row d-flex justify-content-center align-items-center ">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center ">
            <div className="col-lg-9 col-12  d-flex flex-column align-items-center align-items-md-start justify-content-center">
              <h1 className="text-center text-lg-right">
                Nouvelle génération digital
              </h1>
              <p className="text-wrapper ">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros
                nunc fringilla id rutrum nibh. Orci convallis pulvinar urna
                fusce at purus neque nam leo? Suspendisse semper facilisi
                parturient sit euismod placerat.
              </p>

              <Button className="" />
            </div>
          </div>
          <div className="col-12 col-md-6 flex-column flex-md-row   content1">
            <img
              className="position-absolute img2 d-none d-md-block  d-xl-block  "
              src="/images/bg-intro-desktop.svg"
            />
            <img
              className=" img1 position-absolute d-none  d-xl-block"
              src="/images/image-mockups.png"
            />

            {/* mobil */}

            <img
              src="/images/bg-intro-mobile.svg"
              alt="mobil bg"
              className=" img2-mobile position-absolute d-block d-md-none"
            />
            <img
              className=" img1-mobile position-absolute d-block d-xl-none"
              src="/images/image-mockups.png"
            />
          </div>
        </div>
      </section>
      <Main2 />
      <Main3 />
    </main>
  );
};

export default Main;
