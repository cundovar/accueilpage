import React, { useState } from "react";
import UseFetch from "../../utils/fetch";



const Main2=()=>{


    const {data,error}=UseFetch('/card.json')
 


    return(
        <section className="bg-primary ">

            <div className="">
                <h1>Pourquoi choisir Easybank? </h1>
                <p>  Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc </p>
            </div>

<div>
    <article className=" d-flex">
{data.map((item,index)=>(

    <div key={index} className=" test article">
        <div className="  ">
        <div ><img src={item.logo} alt={item.titre}/> </div>
        <h2>{item.titre}</h2>
        <div>{item.text}</div>

        </div>
    </div>

))}
</article>
</div>



        </section>
    )
}

export default Main2