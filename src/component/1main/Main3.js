import React from "react";
import UseFetch from "../../utils/fetch";



const Main3=()=>{
   

    const {data,error}=UseFetch("./article.json")


    return(
        <section className="bg-section-3">

            <div className="section__content">
                <h1 className="section__content__text">Deniers Articles</h1>
                <div className="d-flex justify-content-center align-items-center ">

                    {data.map((item,index)=>(
                        <div className="article"  key={index}>
                            <div className="articleImage"> <img src={item.image} alt={item.name}/> </div>
                            <div>{item.name} </div>
                            <div>{item.text} </div>
                            <div>{item.text2} </div>
                        </div>
                    ))}


                </div>
            </div>


        </section>
    )
}

export default Main3