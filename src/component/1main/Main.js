import React from "react"; 
import Main2 from "./Main2.js"


const Main=()=>{
    return(
        <>
        <section className="container-fluid row ">
            <div className="col-6 d-flex justify-content-center align-items-center">

                <div className="col-6">
                    <h1>Nouvelle génération digital</h1>
                    <p className="text-wrapper">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh.
    Orci convallis pulvinar urna fusce at purus neque nam leo? Suspendisse semper facilisi
    parturient sit euismod placerat.
                  
                    </p>
                  
                    <button>
                        skdfgsbgk
                    </button>
                </div>


            </div>
            <div className="col-6 position-relative">

        <img className="position-absolute" src="/images/image-mockups.png"/>
         <img src="/images/bg-intro-desktop.svg"/>
         
            </div>

        </section>
        <Main2/>
        </>
    )
}


export default Main