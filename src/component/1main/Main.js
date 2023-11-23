import React from "react"; 
import Main2 from "./Main2.js"
import Main3 from "./Main3.js";

const Main=()=>{
    return(
        <main className="container-fluid main  ">
        <section className="d-flex relative col-12">
            <div className="col-6 ">

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
            <div className="col-6 position-absolute top-0 start-50 translate-middle">
            <div className=" position-relative">

        <img className="position-absolute" src="/images/image-mockups.png"/>
         <img src="/images/bg-intro-desktop.svg"/>
         
            </div>

            </div>

        </section>
        <Main2/>
        <Main3/>
        </main>
    )
}


export default Main