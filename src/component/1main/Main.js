import React from "react";
import Main2 from "./Main2.js";
import Main3 from "./Main3.js";
import Button from "../common/greenButton.js";

const Main = () => {
  return (
    <main className=" main  position-relative  ">
      <section className="d-flex   position-relative bg-section-1 ">
        <div className="section__content  col-6 d-flex justify-content-center align-items-center ">
          <div className="col-6 d-flex flex-column justify-content-center ">
            <div className="col-lg-9"> 
            <h1>Nouvelle génération digital</h1>
            <p className="text-wrapper">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros
              nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce
              at purus neque nam leo? Suspendisse semper facilisi parturient sit
              euismod placerat.
            </p>

           <Button/>

            </div>
          </div>
          <div className="col-6  content1">
      
             <img className="position-absolute img2 " src="/images/bg-intro-desktop.svg" />
         <img
                className=" img1 position-absolute"
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
