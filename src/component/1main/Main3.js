import React from "react";
import UseFetch from "../../utils/fetch";



const Main3=()=>{
   

    const {data,error}=UseFetch("./article.json")


    return(
        <section className="bg-section-3 ">

            <div className="section__content">
                <h1 className="section__content__text text-center text-md-start">Deniers Articles</h1>
                <div className=" d-flex  flex-md-row justify-content-around flex-column  ggg pb-3">

                    {data.map((item,index)=>(
                        <div className="article articleMain3 col-12 col-md-3  "  key={index}>
                            <div className="articleImage"> <img src={item.image} alt={item.name}/> </div>
                            <div className="articleMain3__p mt-lg-5 mt-2" >{item.name} </div>
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