import React, { useState } from "react";
import UseFetch from "../../utils/fetch";

const Main2 = () => {
  const { data, error } = UseFetch("/card.json");

  return (
    <section className="bg-section-2 ">
      <div className="section__content">
        <div className="section__content__text">
          <h1 >Pourquoi choisir Easybank? </h1>
          <p>
           
            Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros
            nunc
          </p>
        </div>

        <div>
          <article className=" d-flex justify-content-around ">
            {data.map((item, index) => (
              <div key={index} className="  article">
                <div className="  ">
                  <div className="mb-5 ">
                    <img src={item.logo} alt={item.titre} />{" "}
                  </div>
                  <h4 className="mb-5">{item.titre}</h4>
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
