import React from "react";

const Header=()=>{

    return(
        <>

      <header className="row p-3 col-12 position-fixed z-3 bg-white" >
 <nav className="navbar navbar-expand-lg ">
   <div className="container-fluid row">
    <a className="navbar-brand col-3" href="#">
    <img src="/images/logo.svg"/>
    </a>
 <div className="collapse navbar-collapse col-6">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contenu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Carrière</a>
        </li>
    </ul>
 </div>
 <div>
    <button className="col-3">
        kfbkskf
    </button>
 </div>



   </div>
 </nav>

      </header>
       
        
        </>
    )
}

export default Header