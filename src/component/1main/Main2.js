import React, { useState } from "react";
import UseFetch from "../../utils/fetch";

import TEST from "./test";

const Main2 = () => {
  const { data, error } = UseFetch("/card.json");




  return (
    <section className="bg-section-2 ">
      <div className="section__content">
        <div className="section__content__text d-flex col-12 flex-column  align-items-center align-items-md-start justify-content-center">
          <h1 className="text-center text-lg-right" >Pourquoi choisir Easybank? </h1>
          <p>
           
            Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros
            nunc
          </p>
        </div>

        <div>
          <article className=   "  d-flex  flex-md-row justify-content-around flex-column " >
            {data.map((item, index) => (
              <div key={index} className="  article m-lg-1 col-12 col-md-3   ">
                <div className="  ">
                  <div className="mb-md-5 mb-3 col-12  d-flex  align-items-center align-items-md-start justify-content-center ">
                    <img src={item.logo} alt={item.titre} />{" "}
                  </div>
                  <h4 className="mb-5  d-flex col-12  align-items-center align-items-md-start justify-content-center">{item.titre}</h4>
                  <div>{item.text}</div>
                </div>
              </div>
            ))}
          </article>
        </div>
      </div>


   
    </section>
  );
};

export default Main2;
