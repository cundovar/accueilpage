import React from "react";
import UseFetch from "../../utils/fetch";



const Main3=()=>{
   

    const {data,error}=UseFetch("./article.json")


    return(
        <section className="bg-section-3">

            <div className="section__content">
                <h1 className="section__content__text">Deniers Articles</h1>
                <div className="d-flex justify-content-around ggg pb-3">

                    {data.map((item,index)=>(
                        <div className="article articleMain3"  key={index}>
                            <div className="articleImage"> <img src={item.image} alt={item.name}/> </div>
                            <div className="articleMain3__p mt-5" >{item.name} </div>
                            <div className="p-2">

                            <div className="mt-3 mb-3">
                                <h5 >

                                {item.text} 
                                </h5>
                                </div>
                            <div >{item.text2} </div>



                            </div>
                        </div>
                    ))}


                </div>
            </div>


        </section>
    )
}

export default Main3