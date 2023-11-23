import React, { useState } from "react";
import UseFetch from "../../utils/fetch";

const Main2 = () => {
  const { data, error } = UseFetch("/card.json");

  return (
    <section className="bg-section-2 ">
      <div className="section__content">
        <div className="section__content__text">
          <h1 className="h1">Pourquoi choisir Easybank? </h1>
          <p>
           
            Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros
            nunc
          </p>
        </div>

        <div>
          <article className=" d-flex justify-content-center align-items-center">
            {data.map((item, index) => (
              <div key={index} className=" test article">
                <div className="  ">
                  <div>
                    <img src={item.logo} alt={item.titre} />{" "}
                  </div>
                  <h5>{item.titre}</h5>
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
